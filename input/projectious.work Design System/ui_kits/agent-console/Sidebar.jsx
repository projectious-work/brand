export function Sidebar({ active = 'pipelines', onNav, theme }) {
  const t = theme;
  const sections = [
    { group: 'Build', items: [
      { id: 'pipelines', label: 'Pipelines' },
      { id: 'agents', label: 'Agents' },
      { id: 'policies', label: 'Policies' }
    ]},
    { group: 'Observe', items: [
      { id: 'runs', label: 'Runs' },
      { id: 'audit', label: 'Audit log' },
      { id: 'metrics', label: 'Metrics' }
    ]},
    { group: 'Settings', items: [
      { id: 'team', label: 'Team' },
      { id: 'connections', label: 'Connections' }
    ]}
  ];
  return (
    <aside style={{
      width: 240, background: t.sidebarBg, color: t.sidebarFg,
      display: 'flex', flexDirection: 'column', borderRight: '1px solid ' + t.sidebarBorder
    }}>
      <div style={{ padding: '18px 20px', borderBottom: '1px solid ' + t.sidebarBorder, display: 'flex', alignItems: 'center', gap: 6 }}>
        <img src={t.sidebarLogoText === '#fff' ? '../../assets/logo/icon-dark.svg' : '../../assets/logo/icon-light.svg'} width="28" height="28" alt="" />
        <span style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, lineHeight: 1,
          color: t.sidebarLogoText, letterSpacing: '-0.4px',
          display: 'inline-block', transform: 'translateY(-2px)'
        }}>projectious</span>
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: t.sidebarLogoSep,
          display: 'inline-block', transform: 'translateY(0px)', margin: '0 -1px'
        }} />
        <span style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, lineHeight: 1,
          color: '#E05232', letterSpacing: '-0.4px',
          display: 'inline-block', transform: 'translateY(-2px)'
        }}>work</span>
      </div>
      <nav style={{ padding: '14px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
        {sections.map(s => (
          <div key={s.group}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: t.sidebarSection, padding: '4px 10px', marginBottom: 4 }}>{s.group}</div>
            {s.items.map(it => (
              <a key={it.id} href="#" onClick={e => { e.preventDefault(); onNav && onNav(it.id); }} style={{
                display: 'block', padding: '7px 10px', borderRadius: 6,
                fontFamily: 'var(--font-body)', fontSize: 13,
                color: active === it.id ? t.sidebarActive : t.sidebarFg,
                background: active === it.id ? t.sidebarActiveBg : 'transparent',
                textDecoration: 'none', borderLeft: active === it.id ? '2px solid #E05232' : '2px solid transparent',
                paddingLeft: active === it.id ? 8 : 10
              }}>{it.label}</a>
            ))}
          </div>
        ))}
      </nav>
      <div style={{ padding: 14, borderTop: '1px solid ' + t.sidebarBorder, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: t.sidebarUserBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.sidebarUserFg, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12 }}>JS</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: t.sidebarUserName, fontWeight: 500, whiteSpace: 'nowrap' }}>Jan Schmidt</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: t.sidebarMuted, whiteSpace: 'nowrap' }}>Platform Eng</div>
        </div>
      </div>
    </aside>
  );
}
