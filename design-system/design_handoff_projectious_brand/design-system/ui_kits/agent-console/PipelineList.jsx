function StatusPill({ status, theme }) {
  const m = (theme.pill[status]) || theme.pill.idle;
  const labelMap = { healthy: 'Healthy', running: 'Running', warning: 'Warning', failed: 'Failed', idle: 'Idle' };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '2px 9px', borderRadius: 9999, background: m.bg, color: m.fg,
      fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: m.fg }} />
      {labelMap[status] || 'Idle'}
    </span>
  );
}

function PipelineList({ rows, selectedId, onSelect, theme }) {
  const t = theme;
  return (
    <div style={{ background: t.surface, border: '1px solid ' + t.surfaceBorder, borderRadius: 9, overflow: 'hidden' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr 0.6fr',
        padding: '10px 18px', background: t.headerBg, borderBottom: '1px solid ' + t.surfaceBorder,
        fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: t.headerFg
      }}>
        <div>Pipeline</div><div>Status</div><div>Last run</div><div>Owner</div><div style={{ textAlign: 'right' }}>Runs</div>
      </div>
      {rows.map(r => (
        <div key={r.id} onClick={() => onSelect(r.id)} style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr 0.6fr',
          padding: '14px 18px', borderBottom: '1px solid ' + t.rowBorder, cursor: 'pointer',
          background: selectedId === r.id ? t.rowSelected : 'transparent',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: t.title }}>{r.name}</div>
            <div style={{ fontFamily: 'var(--font-code)', fontSize: 11, color: t.text2, marginTop: 2 }}>{r.tag}</div>
          </div>
          <div><StatusPill status={r.status} theme={theme} /></div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: t.text1 }}>{r.lastRun}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: t.text2 }}>{r.owner}</div>
          <div style={{ fontFamily: 'var(--font-code)', fontSize: 12, color: t.code, textAlign: 'right' }}>{r.runs}</div>
        </div>
      ))}
    </div>
  );
}

window.PipelineList = PipelineList;
window.StatusPill = StatusPill;
