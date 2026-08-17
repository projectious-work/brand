// Tabler `sun` / `moon` (MIT) inlined — 24px grid, round caps.
// Tabler ships at stroke-width 2; the brand rule is 1.5, which the set supports.
function ModeIcon({ mode, color }) {
  const common = {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': 'true', focusable: 'false'
  };
  if (mode === 'dark' || mode === 'navy') {
    return (
      <svg {...common}>
        <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
    </svg>
  );
}

export function Topbar({ title, theme, mode, onToggleMode }) {
  const t = theme;
  // Three appearances, cycled in order: light → deep dark → navy dark.
  const nextLabel = mode === 'light' ? 'deep dark' : mode === 'dark' ? 'navy dark' : 'light';
  return (
    <header style={{
      padding: '14px 28px', borderBottom: '1px solid ' + t.topbarBorder,
      background: t.topbarBg,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16
    }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: t.topbarMuted, fontWeight: 500, whiteSpace: 'nowrap' }}>Workspace · acme-corp</div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.3px', color: t.topbarTitle, margin: 0 }}>{title}</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <input placeholder="Search pipelines, agents, runs…" style={{
          fontFamily: 'var(--font-body)', fontSize: 13, padding: '8px 14px',
          width: 280, border: '1.5px solid ' + t.inputBorder, borderRadius: 6,
          background: t.inputBg, color: t.inputFg, outline: 0
        }} />
        <button onClick={onToggleMode} aria-label={'Switch to ' + nextLabel + ' mode'} title={'Switch to ' + nextLabel + ' mode'} style={{
          width: 36, height: 36, border: '1.5px solid ' + t.inputBorder,
          borderRadius: 6, background: t.inputBg,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 0, flexShrink: 0
        }}>
          <ModeIcon mode={mode} color={t.icon || t.text2} />
        </button>
        <button style={{
          fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 13,
          padding: '8px 16px', border: 0, borderRadius: 6, whiteSpace: 'nowrap', flexShrink: 0,
          color: '#fff', background: '#cc4528', cursor: 'pointer'
        }}>+ New pipeline</button>
      </div>
    </header>
  );
}
