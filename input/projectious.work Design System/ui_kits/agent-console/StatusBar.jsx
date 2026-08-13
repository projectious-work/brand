export function StatusBar({ theme }) {
  const t = theme;
  return (
    <div style={{
      padding: '8px 28px', background: t.statusBarBg, color: t.statusBarFg,
      fontFamily: 'var(--font-code)', fontSize: 11, whiteSpace: 'nowrap',
      display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0,
      borderTop: '1px solid ' + t.statusBarBorder
    }}>
      <span style={{ color: t.statusBarOk }}>● API healthy</span>
      <span>·</span>
      <span>4 agents active</span>
      <span>·</span>
      <span>policy v3.2</span>
      <span style={{ marginLeft: 'auto', color: t.statusBarMuted }}>v2.1.0 · synced just now</span>
    </div>
  );
}
