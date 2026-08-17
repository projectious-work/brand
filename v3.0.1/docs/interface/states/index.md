# States

> Empty, loading, and error states — the screens a component set never shows you.


A component set shows every part working. A product spends a lot of its life in
the three states where nothing is working yet: **there is no data**, **the data
has not arrived**, and **the data will not arrive**. Those three screens are
where a design system is actually tested, so they are specified here rather than
left to whoever hits them first.

Every state on this page follows the same shape:

> **What is true** → **why** → **the one thing to do about it.**

If a state cannot name the one thing to do, it is an error state with an
optimistic title.

## Empty states

Three kinds, and they are not interchangeable:

| Kind | When | The action |
|---|---|---|
| **First run** | The feature works; nothing has been created yet | The accent button that creates the first one |
| **Filtered to nothing** | There is data; the current filter excludes all of it | Clear the filter — and show what the filter *is* |
| **Nothing to report** | Empty is the good outcome — no open findings | No action. Say so plainly |

The first-run empty state is the only one that gets an accent button — it is the
only one where creating something is what the user came to do. "Filtered to
nothing" gets a ghost button, because the fix is to undo, not to create.

{{< demo label="First run, filtered to nothing, nothing to report" variant="grid" >}}
<div class="pj-card">
  <div class="pj-card__body" style="text-align:center;padding-block:1.5rem">
    <div class="pj-card__title">No pipelines yet</div>
    <div class="pj-card__text">A pipeline runs your policy checks before a deployment is promoted.</div>
    <div style="margin-top:1rem"><button class="pj-btn pj-btn--accent pj-btn--md">Create a pipeline</button></div>
  </div>
</div>
<div class="pj-card">
  <div class="pj-card__body" style="text-align:center;padding-block:1.5rem">
    <div class="pj-card__title">No pipelines match</div>
    <div class="pj-card__text">48 pipelines exist. None are both <strong>strict</strong> and <strong>failing</strong>.</div>
    <div style="margin-top:1rem"><button class="pj-btn pj-btn--ghost pj-btn--md">Clear 2 filters</button></div>
  </div>
</div>
<div class="pj-card">
  <div class="pj-card__body" style="text-align:center;padding-block:1.5rem">
    <div class="pj-card__title">No open findings</div>
    <div class="pj-card__text">The last audit completed 4 minutes ago and found nothing.</div>
    <div style="margin-top:1rem"><span class="pj-status pj-status--ok"><span class="pj-status__dot"></span>Healthy</span></div>
  </div>
</div>
{{< /demo >}}

An empty state is **body text, not an illustration**. The system's answer to a
blank screen is [a diagram or nothing](/docs/portfolio/diagrams/),
never a mascot or a spot illustration of a person holding a magnifying glass.

{{% callout title="Never show an empty state you are not sure about" type="warning" %}}
"No results" while a request is still in flight is a lie the user acts on. A
region is in the loading state until the response arrives, and only then
resolves to empty, populated, or error. Empty is a *result*, not a default.
{{% /callout %}}

## Loading states

Two mechanisms, chosen by **what you know about the shape of what is coming**:

| | Use | Why |
|---|---|---|
| **Skeleton** | You know the layout — a table of rows, a card grid, a KPI row | The layout does not jump when content arrives |
| **Spinner** | You know nothing — an action in flight, an indeterminate wait | There is no shape to promise |

Prefer the skeleton. A spinner in the middle of a region that is about to become
a table tells the user nothing and then reflows the page underneath them.

A skeleton is **`midnight-2` blocks at the real dimensions of the content**,
with the real gaps and the real number of rows where that is known. It carries a
100ms shimmer at `--duration-standard`, and it does not shimmer at all under
`prefers-reduced-motion: reduce` — it simply sits there as static blocks.

{{< demo label="Skeleton — real dimensions, real row count" variant="stack" >}}
<div class="pj-card" role="status" aria-label="Loading pipelines">
  <div class="pj-card__body">
    <div style="display:flex;flex-direction:column;gap:.625rem">
      <div style="height:12px;width:38%;background:var(--pj-midnight-3);border-radius:3px"></div>
      <div style="height:36px;background:var(--pj-midnight-2);border-radius:6px"></div>
      <div style="height:36px;background:var(--pj-midnight-2);border-radius:6px"></div>
      <div style="height:36px;background:var(--pj-midnight-2);border-radius:6px"></div>
    </div>
  </div>
</div>
{{< /demo >}}

{{< demo label="Spinner — indeterminate work, with its label" >}}
<span class="pj-spinner" role="status" aria-label="Applying changes"></span>
<span style="font-size:.8125rem;color:var(--pj-muted-fg)">Applying changes…</span>
<button class="pj-btn pj-btn--primary pj-btn--md" disabled>Applying…</button>
{{< /demo >}}

Timing rules, so the loading state does not become its own flicker:

- **Under 200ms** — show nothing. A skeleton that appears and vanishes is worse
  than a brief pause.
- **200ms to 10s** — skeleton or spinner.
- **Over 10s** — a determinate `pj-progress` bar with a count ("3 of 12 checks"),
  or the state moves to a background job with its own row in the list.

**Every loading region carries `role="status"` and an accessible label**, or a
screen-reader user gets silence where a sighted user gets motion. Never animate
a skeleton in a way that hides that the operation has stalled — a shimmer that
runs for two minutes says "working" when the truth is "stuck".

## Error pages

Full-page errors — 404 and 500 — are the brand's worst-case first impression, so
they use the same page shell and the same voice as everything else. No apology
paragraph, no cartoon, no error code as a headline.

| | 404 | 500 |
|---|---|---|
| Headline | "That page does not exist" | "Something failed on our side" |
| Body | What might have happened, in one sentence | What we know, and whether it is being worked on |
| Action | Back to a real destination + search | Retry, and a route to a status page or support |
| Blame | The link, not the reader | Us, explicitly |

The code (`404`, `500`) appears as an overline above the headline, in the muted
foreground — findable when someone is reporting the problem, never the loudest
thing on the page.

{{< demo label="404 and 500 — same shell, different obligation" variant="grid" >}}
<div class="pj-card">
  <div class="pj-card__body">
    <div class="pj-overline" style="color:var(--pj-muted-fg)">Error 404</div>
    <div class="pj-card__title" style="margin-top:.375rem">That page does not exist</div>
    <div class="pj-card__text">The link may be out of date, or the pipeline may have been deleted.</div>
  </div>
  <div class="pj-card__actions">
    <button class="pj-btn pj-btn--primary pj-btn--sm">Go to pipelines</button>
    <button class="pj-btn pj-btn--ghost pj-btn--sm">Search</button>
  </div>
</div>
<div class="pj-card">
  <div class="pj-card__body">
    <div class="pj-overline" style="color:var(--pj-muted-fg)">Error 500</div>
    <div class="pj-card__title" style="margin-top:.375rem">Something failed on our side</div>
    <div class="pj-card__text">The request did not complete. Nothing was deployed. Reference <code>req_8f2c14</code>.</div>
  </div>
  <div class="pj-card__actions">
    <button class="pj-btn pj-btn--primary pj-btn--sm">Try again</button>
    <button class="pj-btn pj-btn--ghost pj-btn--sm">Service status</button>
  </div>
</div>
{{< /demo >}}

A 500 says **what did not happen**. "Nothing was deployed" is the sentence the
reader needs; "an unexpected error occurred" is the sentence they cannot act on.
If the outcome is genuinely unknown, say that instead — it is a different fact
and it changes what they do next.

## Inline errors

Not every failure takes the page. A failure scoped to one region stays in that
region, so the rest of the screen remains usable:

- **A field** fails with [`pj-input--error` and a message below
  it](/docs/interface/forms/) — never a tooltip, never colour on
  the border alone.
- **A panel** fails with a `pj-alert--danger` inside the panel and a retry
  control, while the surrounding page keeps working.
- **A background job** fails into a row in the activity feed with a `pj-status
  --err` dot **and** the word "Failed".

{{< demo label="Panel-scoped failure — the page keeps working" variant="stack" >}}
<div class="pj-card">
  <div class="pj-card__body">
    <div class="pj-card__title">Agent activity</div>
    <div class="pj-alert pj-alert--danger" style="margin-top:.75rem">
      <div class="pj-alert__title">Could not load activity</div>
      <div class="pj-alert__text">The activity service did not respond. Everything else on this page is current.</div>
    </div>
  </div>
  <div class="pj-card__actions"><button class="pj-btn pj-btn--ghost pj-btn--sm">Retry</button></div>
</div>
{{< /demo >}}

{{< rules >}}
{{% do %}}
Say what is true, why, and the one thing to do. Use a skeleton wherever the
layout is known. Label every loading region for screen readers. Tell a reader
what did *not* happen when something failed.
{{% /do %}}
{{% dont %}}
Show "no results" before the response arrives, put an accent button on a
"filtered to nothing" state, headline an error with its status code, or let a
region-scoped failure take the whole page.
{{% /dont %}}
{{< /rules >}}


---
Source: https://projectious-work.github.io/brand/v3.0.1/docs/interface/states/index.md
