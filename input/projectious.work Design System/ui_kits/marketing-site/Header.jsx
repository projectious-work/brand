export function Header({ dark = false }) {
  const fg = dark ? '#c5daf0' : '#142438';
  const sub = dark ? '#97a8b8' : '#5c6f82';
  const border = dark ? 'rgba(255,255,255,0.08)' : '#cdd0d5';
  const bg = dark ? '#0e1720' : 'rgba(248,249,251,0.88)';
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: bg, backdropFilter: 'blur(8px)',
      borderBottom: `1px solid ${border}`,
      padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="../../assets/logo/icon-light.svg" width="28" height="28" style={{ display: dark ? 'none' : 'block' }} alt="" />
        <img src="../../assets/logo/icon-dark.svg" width="28" height="28" style={{ display: dark ? 'block' : 'none' }} alt="" />
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17, color: fg, letterSpacing: '-0.3px' }}>
          projectious<span style={{ color: '#7490b2' }}>·</span><span style={{ color: '#E05232' }}>work</span>
        </span>
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {['Practice areas', 'How we work', 'Cases', 'Writing'].map(label => (
          <a key={label} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: sub, textDecoration: 'none', whiteSpace: 'nowrap' }}>{label}</a>
        ))}
        <button style={{
          fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 13,
          padding: '8px 18px', border: 0, borderRadius: 6, whiteSpace: 'nowrap',
          color: '#fff', background: '#cc4528', cursor: 'pointer'
        }}>Start a project</button>
      </nav>
    </header>
  );
}
