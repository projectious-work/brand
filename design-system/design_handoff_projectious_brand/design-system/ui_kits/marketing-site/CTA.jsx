function CTA() {
  return (
    <section style={{
      background: '#1d3352', padding: '80px 32px', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: -160, right: -160, width: 460, height: 460,
        background: 'radial-gradient(circle, rgba(224,82,50,0.10) 0%, rgba(224,82,50,0) 65%)',
        pointerEvents: 'none'
      }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, position: 'relative' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36, color: '#fff', margin: 0, letterSpacing: '-0.4px' }}>Ready to redesign how you work?</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#97a8b8', margin: '8px 0 0' }}>30-minute introduction. No deck.</p>
        </div>
        <button style={{
          fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 15,
          padding: '14px 28px', border: 0, borderRadius: 6,
          color: '#fff', background: '#E05232', cursor: 'pointer', flexShrink: 0
        }}>Book an intro</button>
      </div>
    </section>
  );
}

window.CTA = CTA;
