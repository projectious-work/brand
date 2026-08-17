export function CodeShowcase() {
  return (
    <section style={{ padding: '96px 32px', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange-11)', marginBottom: 16 }}>What we ship</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36, lineHeight: 1.2, letterSpacing: '-0.4px', color: 'var(--fg-1)', margin: 0 }}>Pipelines you can reason about.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--fg-3)', marginTop: 16 }}>Declarative configs. Auditable runs. Policies that fail closed. Whether the operator is human or agent, the pipeline behaves the same way.</p>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 24, fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 500, color: 'var(--orange-11)', textDecoration: 'none' }}>
            View the docs <span style={{ fontSize: 16 }}>→</span>
          </a>
        </div>
        <div style={{
          background: '#0e1720', borderRadius: 9, padding: 22, fontFamily: 'var(--font-code)',
          fontSize: 13, lineHeight: 1.85, color: '#c5daf0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a454f' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a454f' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a454f' }} />
          </div>
          <div><span style={{ color: '#7e8f9e' }}>{`// Agent-validated deploy`}</span></div>
          <div><span style={{ color: '#8aacc8' }}>const</span> pipeline = createPipeline({'{'}</div>
          <div>&nbsp;&nbsp;name: <span style={{ color: '#ea7558' }}>"validate-deploy"</span>,</div>
          <div>&nbsp;&nbsp;policy: <span style={{ color: '#ea7558' }}>"strict"</span>,</div>
          <div>&nbsp;&nbsp;agents: [<span style={{ color: '#ea7558' }}>"auditor"</span>, <span style={{ color: '#ea7558' }}>"deployer"</span>]</div>
          <div>{'}'});</div>
          <div>&nbsp;</div>
          <div><span style={{ color: '#6cc090' }}>✓</span> 12 checks passed · 1.2s</div>
        </div>
      </div>
    </section>
  );
}
