import { StatusPill } from './PipelineList';

export function RunDetail({ pipeline, theme }) {
  const t = theme;
  if (!pipeline) {
    return (
      <div style={{
        background: t.surface, border: '1px solid ' + t.surfaceBorder, borderRadius: 9,
        padding: 36, textAlign: 'center', color: t.text2, fontFamily: 'var(--font-body)', fontSize: 13
      }}>
        Select a pipeline to view its latest run.
      </div>
    );
  }
  const stages = [
    { name: 'Validate config', status: 'done', dur: '0.2s' },
    { name: 'Policy check', status: 'done', dur: '0.4s' },
    { name: 'Deploy to staging', status: 'done', dur: '0.6s' },
    { name: 'Audit deploy', status: 'running', dur: '—' }
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14 }}>
      <div style={{
        background: t.surface, border: '1px solid ' + t.surfaceBorder, borderRadius: 9,
        padding: '18px 22px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: t.title }}>{pipeline.name} · run #{pipeline.runs}</div>
            <div style={{ fontFamily: 'var(--font-code)', fontSize: 11, color: t.text2, marginTop: 3 }}>started {pipeline.lastRun} · by {pipeline.owner}</div>
          </div>
          <StatusPill status={pipeline.status} theme={theme} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {stages.map(s => (
            <div key={s.name} style={{
              flex: 1, padding: '10px 12px', borderRadius: 6,
              background: s.status === 'done' ? t.stageDone : s.status === 'running' ? t.stageRun : t.stageIdle,
              border: s.status === 'running' ? '1px solid ' + t.stageRunBorder : '1px solid transparent'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.status === 'done' ? t.stageDotDone : s.status === 'running' ? t.stageDotRun : t.stageDotIdle, flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 11, color: t.title, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-code)', fontSize: 10, color: t.stageLabel || t.text2, marginTop: 4 }}>{s.dur}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: t.termBg, borderRadius: 9, padding: 18,
        fontFamily: 'var(--font-code)', fontSize: 12, lineHeight: 1.85, color: t.termText,
        border: '1px solid ' + (t.termBorder || (t.termBg === '#f8f9fb' ? t.surfaceBorder : 'transparent'))
      }}>
        <div style={{ color: t.termComment, marginBottom: 6 }}>// Live log · auditor agent</div>
        <div><span style={{ color: t.termPrompt }}>$</span> <span style={{ color: t.termCmd }}>projectious run --pipeline {pipeline.tag}</span></div>
        <div><span style={{ color: t.termOk }}>✓</span> Config validated against schema v3.2</div>
        <div><span style={{ color: t.termOk }}>✓</span> Policy check: 12 rules passed</div>
        <div><span style={{ color: t.termOk }}>✓</span> Deploy to staging completed (1.2s)</div>
        <div><span style={{ color: t.termRun }}>●</span> Auditor agent reviewing deploy artifacts...</div>
      </div>
    </div>
  );
}
