// Lucide `sun` / `moon` (MIT) inlined — stroke-only, 24px grid, 1.5px stroke, round caps.
function ModeIcon({ mode, color }) {
  const common = {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': 'true', focusable: 'false'
  };
  if (mode === 'dark') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" /><path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" /><path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function Topbar({ title, theme, mode, onToggleMode }) {
  const t = theme;
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
        <button onClick={onToggleMode} aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} style={{
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
