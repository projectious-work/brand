export function Footer() {
  return (
    <footer style={{
      padding: '36px 32px', background: 'var(--bg)',
      borderTop: '1px solid #cdd0d5'
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="../../assets/logo/icon-light.svg" width="22" height="22" alt="" />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: 'var(--fg-1)' }}>
            projectious<span style={{ color: '#7490b2' }}>·</span><span style={{ color: '#E05232' }}>work</span>
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-3)' }}>
          Cloud · Agile · Agentic AI &nbsp;·&nbsp; © 2026
        </div>
      </div>
    </footer>
  );
}
