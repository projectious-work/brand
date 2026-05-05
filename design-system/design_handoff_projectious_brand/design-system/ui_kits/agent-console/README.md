# Agent console UI kit — projectious.work

A faithful recreation of an agent-first ops console — the kind of internal product the brand sells (and uses on itself). Sidebar navigation, pipeline list, run detail with terminal output, and a status bar.

Sourced from the kitchen-sink and digital-experience HTML files in `brand/html/`.

Open `index.html` for an interactive view. Click a pipeline in the list to see its run detail.

## Components
- `Sidebar.jsx` — vertical nav with brand mark, sections, user
- `Topbar.jsx` — page title, search, primary action
- `PipelineList.jsx` — table of pipelines with status, last run, owner
- `RunDetail.jsx` — selected run with stages, logs, agents
- `StatusBar.jsx` — bottom bar with system health
