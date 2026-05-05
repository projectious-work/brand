function Footer() {
  return (
    <footer style={{
      padding: '36px 32px', background: '#f5f4f2',
      borderTop: '1px solid #e5e3de'
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="../../assets/logo/icon-light.svg" width="22" height="22" alt="" />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: '#1d3352' }}>
            projectious<span style={{ color: '#7490b2' }}>·</span><span style={{ color: '#E05232' }}>work</span>
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#5c6f82' }}>
          Cloud · Agile · Agentic AI &nbsp;·&nbsp; © 2026
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
