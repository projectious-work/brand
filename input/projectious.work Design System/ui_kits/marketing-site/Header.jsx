export function Header() {
  const fg = 'var(--fg-1)';
  const sub = 'var(--fg-2)';
  const border = 'var(--border)';
  const bg = 'var(--header-bg)';
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
          projectious<span style={{ color: 'var(--midnight-8)' }}>·</span><span style={{ color: 'var(--logo-accent)' }}>work</span>
        </span>
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {['Practice areas', 'How we work', 'Cases', 'Writing'].map(label => (
          <a key={label} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: sub, textDecoration: 'none', whiteSpace: 'nowrap' }}>{label}</a>
        ))}
        <button style={{
          fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 13,
          padding: '8px 18px', border: 0, borderRadius: 6, whiteSpace: 'nowrap',
          color: 'var(--fixed-control-text)', background: 'var(--color-accent-solid)', cursor: 'pointer'
        }}>Start a project</button>
      </nav>
    </header>
  );
}
