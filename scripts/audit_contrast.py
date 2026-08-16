#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.10"
# dependencies = ["playwright>=1.50,<2"]
# ///
"""Audit text contrast across the built site in both theme modes."""

from __future__ import annotations

import argparse
import functools
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
PREFIX = "/brand"

AUDIT = r"""
() => {
  const parse = (c) => {
    const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
    return m ? {r:+m[1],g:+m[2],b:+m[3],a:m[4]===undefined?1:+m[4]} : null;
  };
  const over = (fg,bg) => ({r:fg.r*fg.a+bg.r*(1-fg.a),g:fg.g*fg.a+bg.g*(1-fg.a),b:fg.b*fg.a+bg.b*(1-fg.a),a:1});
  const lum = ({r,g,b}) => {
    const f = (v) => {v/=255;return v<=.03928?v/12.92:((v+.055)/1.055)**2.4};
    return .2126*f(r)+.7152*f(g)+.0722*f(b);
  };
  const ratio = (a,b) => {const [x,y]=[lum(a),lum(b)].sort((m,n)=>n-m);return (x+.05)/(y+.05)};
  const bgOf = (el) => {
    let node=el,stack=[];
    while(node && node!==document.documentElement.parentElement){
      const cs=getComputedStyle(node);
      if(cs.backgroundImage && cs.backgroundImage!=="none") return null;
      const c=parse(cs.backgroundColor);
      if(c&&c.a>0){stack.push(c);if(c.a===1)break}
      node=node.parentElement;
    }
    let base={r:255,g:255,b:255,a:1};
    for(let i=stack.length-1;i>=0;i--)base=over(stack[i],base);
    return base;
  };
  const sel = (el) => {
    const id=el.id?`#${el.id}`:"";
    const cls=(el.className&&typeof el.className==="string")?"."+el.className.trim().split(/\s+/).slice(0,3).join("."):"";
    return `${el.tagName.toLowerCase()}${id}${cls}`;
  };
  const exempt = (el) => {
    if(el.closest(".pj-wm, .header__brand, .lockup"))return true;
    if(el.closest(".skip-link"))return true;
    if(el.matches(":disabled, [aria-disabled='true']"))return true;
    return Boolean(el.closest(":disabled, [aria-disabled='true']"));
  };
  const out=[];
  for(const el of document.querySelectorAll("body *")){
    const st=getComputedStyle(el);
    if(st.display==="none"||st.visibility==="hidden"||+st.opacity===0||exempt(el))continue;
    const own=Array.from(el.childNodes).filter(n=>n.nodeType===3&&n.textContent.trim()).map(n=>n.textContent.trim()).join(" ");
    if(!own)continue;
    const box=el.getBoundingClientRect();if(box.width<2||box.height<2)continue;
    const raw=parse(st.color),bg=bgOf(el);if(!raw||!bg)continue;
    const cr=ratio(over(raw,bg),bg),px=parseFloat(st.fontSize),bold=(parseInt(st.fontWeight,10)||400)>=700;
    const need=(px>=24||(bold&&px>=18.66))?3:4.5;
    if(cr<need)out.push({sel:sel(el),text:own.slice(0,45),ratio:+cr.toFixed(2),need,color:st.color,bg:`rgb(${Math.round(bg.r)}, ${Math.round(bg.g)}, ${Math.round(bg.b)})`,px:+px.toFixed(1)});
  }
  return out;
}
"""


class PrefixHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        if path.startswith(PREFIX):
            path = path[len(PREFIX) :] or "/"
        return super().translate_path(path)

    def log_message(self, _format: str, *_args) -> None:
        pass


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--quiet", action="store_true")
    args = parser.parse_args()
    if not PUBLIC.is_dir():
        raise SystemExit("public/ not found — run scripts/build-docs.sh first")
    pages = sorted(
        "/" + str(path.relative_to(PUBLIC)).replace("index.html", "")
        for path in PUBLIC.rglob("index.html")
        if "_print" not in path.parts
        and not any(part in {"downloads", "favicons", "categories", "tags"} for part in path.parts)
    )
    handler = functools.partial(PrefixHandler, directory=str(PUBLIC))
    server = ThreadingHTTPServer(("127.0.0.1", 8139), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    findings: dict[tuple, dict] = {}
    checked = 0
    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch()
            for mode in ("light", "dark"):
                context = browser.new_context(
                    viewport={"width": 1280, "height": 1000}, color_scheme=mode
                )
                context.add_init_script(
                    f"localStorage.setItem('pw:mode', '{mode}')"
                )
                page = context.new_page()
                for relative_url in pages:
                    page.goto(
                        f"http://127.0.0.1:8139{PREFIX}{relative_url}",
                        wait_until="load",
                    )
                    page.evaluate("() => document.fonts.ready")
                    page.evaluate("mode => window.pwTheme && window.pwTheme.set(mode)", mode)
                    applied = page.evaluate(
                        "() => document.documentElement.getAttribute('data-theme')"
                    )
                    if applied != mode:
                        raise RuntimeError(
                            f"theme not applied on {relative_url}: wanted {mode}, got {applied}"
                        )
                    for finding in page.evaluate(AUDIT):
                        key = (mode, finding["sel"], finding["color"], finding["bg"])
                        current = findings.setdefault(
                            key, {**finding, "mode": mode, "count": 0, "pages": []}
                        )
                        current["count"] += 1
                        if len(current["pages"]) < 3 and relative_url not in current["pages"]:
                            current["pages"].append(relative_url)
                    checked += 1
                context.close()
            browser.close()
    finally:
        server.shutdown()
        server.server_close()
    ordered = sorted(findings.values(), key=lambda item: item["ratio"])
    print(f"\nAudited {len(pages)} pages x 2 themes = {checked} renders")
    print(f"Distinct failing text/background pairs: {len(ordered)}\n")
    if not args.quiet:
        for item in ordered:
            print(
                f"[{item['mode']}] {item['ratio']}:1 (needs {item['need']}) "
                f"{item['px']}px  {item['sel']}\n"
                f"    fg {item['color']} on bg {item['bg']}\n"
                f"    \"{item['text']}\" — {item['count']} occurrence(s), "
                f"e.g. {item['pages'][0]}"
            )
    if ordered:
        raise SystemExit(1)
    print("No contrast failures found.")


if __name__ == "__main__":
    main()
