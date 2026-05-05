function Convictions() {
  const items = [
    { n: '01', t: 'Do more with more', b: 'Augment people\u2019s strengths so the same or more people produce more, higher quality, for broader markets.' },
    { n: '02', t: 'Specialized beats generic now', b: 'Agents collapse the cost of bespoke software. Lot-of-one systems \u2014 built for one team\u2019s exact workflow \u2014 are now economically rational. Underserved companies stop bending themselves to fit generic SaaS or Excel.' },
    { n: '03', t: 'Provider independence', b: 'Agnostic, self-hosted where it matters. No single AI vendor becomes a single point of failure.' },
    { n: '04', t: 'We run what we recommend', b: 'Same convictions, same software, applied to ourselves first.' }
  ];
  return (
    <section style={{ padding: '96px 32px', background: '#f5f4f2' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E05232', marginBottom: 16 }}>Convictions</div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: '-0.6px', color: '#1d3352', margin: 0, maxWidth: 720 }}>What we believe, on the record.</h2>
        <div style={{ marginTop: 40 }}>
          {items.map(it => (
            <div key={it.n} style={{
              display: 'grid', gridTemplateColumns: '90px 1fr', gap: 32,
              padding: '24px 0', borderTop: '1px solid #e5e3de'
            }}>
              <div style={{ fontFamily: 'var(--font-code)', fontSize: 14, color: '#E05232', fontWeight: 500 }}>{it.n}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: '#1d3352', letterSpacing: '-0.2px' }}>{it.t}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: '#5c6f82', marginTop: 6, maxWidth: 760 }}>{it.b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Convictions = Convictions;
