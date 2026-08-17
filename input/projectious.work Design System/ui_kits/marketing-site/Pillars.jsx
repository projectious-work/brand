export function Pillars() {
  const items = [
    { title: 'Cloud', body: 'Composable, provider-independent infrastructure. We design platforms that survive vendor decisions.' },
    { title: 'Agile', body: 'Lean delivery with continuous policy and audit baked in — quality is not a phase, it is a posture.' },
    { title: 'Agentic AI', body: 'Agents in the loop, not on the side. We integrate them into the work, not the demo.' }
  ];
  return (
    <section style={{ padding: '96px 32px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange-11)', marginBottom: 16 }}>Practice areas</div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: '-0.6px', color: 'var(--fg-1)', margin: 0, maxWidth: 720 }}>Three practices. One discipline.</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--fg-3)', marginTop: 16, maxWidth: 620 }}>We deliver as a single team. The labels exist for clarity, not for org charts.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 48 }}>
          {items.map(it => (
            <div key={it.title} style={{
              background: 'var(--surface)', border: '1px solid #cdd0d5', borderRadius: 9,
              padding: '28px 26px'
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 6, background: '#dae2ec',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--fg-1)',
                marginBottom: 18
              }}>{it.title[0]}</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: 'var(--fg-1)', marginBottom: 8 }}>{it.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-3)' }}>{it.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
