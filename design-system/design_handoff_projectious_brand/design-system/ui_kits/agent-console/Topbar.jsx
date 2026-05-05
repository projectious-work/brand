function Topbar({ title, theme, mode, onToggleMode }) {
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
        <button onClick={onToggleMode} title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} style={{
          width: 36, height: 36, border: '1.5px solid ' + t.inputBorder,
          borderRadius: 6, background: t.inputBg, color: t.topbarTitle,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, padding: 0, flexShrink: 0
        }}>
          {mode === 'dark' ? '☀' : '☾'}
        </button>
        <button style={{
          fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 13,
          padding: '8px 16px', border: 0, borderRadius: 6, whiteSpace: 'nowrap', flexShrink: 0,
          color: '#fff', background: '#E05232', cursor: 'pointer'
        }}>+ New pipeline</button>
      </div>
    </header>
  );
}

window.Topbar = Topbar;
