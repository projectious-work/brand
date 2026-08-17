export function Hero() {
  return (
    <section style={{
      background: 'var(--hero-bg)',
      color: 'var(--hero-fg)',
      padding: '110px 32px 100px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* approved decorative motif: top-right circular orange glow at 6% */}
      <div style={{
        position: 'absolute', top: -200, right: -200, width: 560, height: 560,
        background: 'radial-gradient(circle, rgba(224,82,50,0.12) 0%, rgba(224,82,50,0) 65%)',
        pointerEvents: 'none'
      }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hero-eyebrow)',
          marginBottom: 24
        }}>Cloud · Agile · Agentic AI</div>
        <h1 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 72,
          lineHeight: 1.05, letterSpacing: '-1.5px', color: 'var(--hero-title)', margin: 0,
          maxWidth: 820
        }}>Redesigning work.</h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.6,
          color: 'var(--hero-body)', marginTop: 28, maxWidth: 620
        }}>Agent-first consulting for organizations adopting AI-native workflows. We run what we recommend — same convictions, same software, applied to your stack.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
          <button style={{
            fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 15,
            padding: '13px 28px', border: 0, borderRadius: 6,
            color: 'var(--fixed-control-text)', background: 'var(--color-accent-solid)', cursor: 'pointer'
          }}>Start a project</button>
          <button style={{
            fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 15,
            padding: '13px 28px', borderRadius: 6,
            background: 'transparent', color: 'var(--hero-fg)',
            border: '1.5px solid rgba(255,255,255,0.18)', cursor: 'pointer'
          }}>How we work</button>
        </div>
      </div>
    </section>
  );
}
