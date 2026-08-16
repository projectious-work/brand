#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.10"
# dependencies = ["playwright>=1.50,<2"]
# ///
"""Capture focused element screenshots from the built documentation site."""

from __future__ import annotations

import functools
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUTPUT = ROOT / ".github/images"
PREFIX = "/brand"
SHOTS = (
    {"name": "palette", "url": "/docs/foundations/color/", "selector": ".pj-swatches", "caption": "core palette swatches"},
    {"name": "scales", "url": "/docs/foundations/color/", "selector": ".pj-scale", "index": 0, "grow": 2, "caption": "12-step scales, light and dark"},
    {"name": "typography", "url": "/docs/foundations/typography/", "selector": ".pj-type", "caption": "type ramp specimen"},
    {"name": "code", "url": "/docs/interface/code/", "selector": ".code", "index": 0, "caption": "adaptive code surface"},
    {"name": "components", "url": "/docs/interface/components/", "selector": ".prose table", "index": 0, "caption": "button variants table"},
    {"name": "dark-mode", "url": "/docs/foundations/color/", "selector": ".pj-swatches", "mode": "dark", "caption": "the same swatches in dark mode"},
)


class PrefixHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        if path.startswith(PREFIX):
            path = path[len(PREFIX) :] or "/"
        return super().translate_path(path)

    def log_message(self, _format: str, *_args) -> None:
        pass


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    handler = functools.partial(PrefixHandler, directory=str(PUBLIC))
    server = ThreadingHTTPServer(("127.0.0.1", 8137), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch()
            page = browser.new_page(
                viewport={"width": 1180, "height": 900}, device_scale_factor=2
            )
            for shot in SHOTS:
                page.goto(
                    f"http://127.0.0.1:8137{PREFIX}{shot['url']}",
                    wait_until="networkidle",
                )
                if mode := shot.get("mode"):
                    page.evaluate(
                        "mode => window.pwTheme && window.pwTheme.set(mode)", mode
                    )
                    page.wait_for_timeout(300)
                page.evaluate("() => document.fonts.ready")
                locator = page.locator(shot["selector"])
                index = shot.get("index", 0)
                if locator.count() <= index:
                    print(
                        f"✗ {shot['name']}: selector "
                        f"{shot['selector']}[{index}] not found"
                    )
                    continue
                box = page.evaluate(
                    """({selector,index,grow}) => {
                      const els=Array.from(document.querySelectorAll(selector));
                      const first=els[index].getBoundingClientRect();
                      const last=(els[index+grow-1]||els[index]).getBoundingClientRect();
                      return {x:first.left+scrollX,y:first.top+scrollY,width:first.width,height:last.bottom-first.top};
                    }""",
                    {"selector": shot["selector"], "index": index, "grow": shot.get("grow", 1)},
                )
                padding = 12
                page.screenshot(
                    path=str(OUTPUT / f"{shot['name']}.png"),
                    full_page=True,
                    clip={
                        "x": max(0, box["x"] - padding),
                        "y": max(0, box["y"] - padding),
                        "width": box["width"] + padding * 2,
                        "height": box["height"] + padding * 2,
                    },
                )
                print(f"✓ {shot['name']}.png — {shot['caption']}")
            browser.close()
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    main()
