# Brand examples

Worked, openable examples of the design system applied end to end — the
counterpart to the component specimens in the documentation. A specimen answers
"what does a card look like"; an example answers "what does a whole engagement
dashboard look like when it is only made of cards, tables, and status dots".

The canonical copies live here, beside the other brand assets. `src/hugo.yaml`
mounts this directory into the site at `static/downloads/examples`, so the
published URLs are `/brand/downloads/examples/<file>` — the same arrangement
`brand/logo/` and `brand/tokens/` use. Do not duplicate these files into `src/`.

| File | What it demonstrates | Documented on |
|---|---|---|
| `dashboard.dc.html` | Composed application shell — sidebar, KPI row, table, activity feed | `interface/patterns` |
| `mobile-onboarding.dc.html` | The same system below 480px, in a device frame | `foundations/responsive` |
| `slide-deck.dc.html` | A full consulting deck, keyboard-navigable, with speaker notes | `media/presentations` |
| `resume.dc.html` | One-page paginated document (CV) | `portfolio/documents` |
| `flier.dc.html` | Service one-pager / sales collateral | `collateral/flier` |
| `diagram-gallery.dc.html` | Sequence, architecture, and org-chart diagrams | `portfolio/diagrams` |
| `email-newsletter.html` | Table-based, Outlook-safe sendable email | `collateral/email` |

## Running them

Every file except `email-newsletter.html` is a **design component** document:
the `<x-dc>` runtime in `lib/support.js` fetches the page's imports at load
time, so the examples must be **served over HTTP** — opening them from `file://`
fails the same-origin fetch. `email-newsletter.html` is plain HTML and opens
either way.

```sh
./scripts/serve-docs.sh          # then browse /brand/downloads/examples/
python3 -m http.server -d brand/examples   # or serve this directory directly
```

## No third-party hosts at page load

The site vendors jQuery and lunr rather than pulling them from a CDN, and these
examples hold the same line:

- **React and ReactDOM** are vendored in `lib/vendor/`. `lib/resources.js`
  points the runtime's `window.__resources` override at them; it must be loaded
  before `lib/support.js`. The vendored bytes are the pinned 18.3.1 UMD builds
  and their sha384 digests match the Subresource Integrity values compiled into
  `support.js`.
- **Babel** is never fetched, because no example asks for an in-browser JSX
  transform: `lib/ios-frame.jsx` is precompiled to `lib/ios-frame.js`, which is
  what `mobile-onboarding.dc.html` imports. Regenerate with
  `scripts/build-examples.sh` after editing the `.jsx`.
- **Lucide icons** are vendored in `lucide/` at version 0.544.0 rather than
  pulled from `unpkg.com/lucide-static@latest`. `latest` is not a version — it
  would let an upstream release change these documents without a commit here.
  `lucide/LICENSE` is the upstream ISC notice; keep it.
- **The logo** is referenced at `../logo/svg/`, the canonical copy, rather than
  duplicated into this directory.

The one remaining external request is the Google Fonts stylesheet in
`lib/colors_and_type.css` — the same three families the documentation site
loads from the same host. Without it the examples fall back to system faces and
still lay out correctly.

### One known console message

`dashboard.dc.html` and `flier.dc.html` log a single 404 for a URL that reads
`{{ item.icon }}`. That is the runtime's placeholder frame requesting the
unsubstituted binding before `renderVals()` supplies the real path; the icons
themselves resolve immediately afterwards. It is inherent to how `sc-for`
pre-renders and is not worth distorting the markup to avoid — `check-links.mjs`
skips any target containing `{{` for the same reason.

## `lib/colors_and_type.css` is a mirror

It restates the tokens so a single example file is portable to someone who has
neither the repository nor a build step. It is **not** a source of truth:
`brand/tokens/variables.css` and `src/assets/scss/_scales.scss` are. When they
disagree, this file is the one that is wrong.
