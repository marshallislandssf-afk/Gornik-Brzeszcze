'use client';
import { useLang } from '../LanguageContext';

export default function ContactPage() {
  const { lang, t } = useLang();
  const tr = t.contact;
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="subtitle">{tr.subtitle}</div>
          <h1>{tr.title}</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{tr.info_label}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: 1, marginBottom: '3rem', lineHeight: 1 }}>{tr.info_title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tr.details.map(([icon, label, value]) => (
                  <div key={label} style={{ display: 'flex', gap: '1.5rem', padding: '1.25rem', background: 'var(--dark-2)', border: '1px solid var(--dark-3)' }}>
                    <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>{icon}</div>
                    <div>
                      <div style={{ color: 'var(--grey)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.3rem' }}>{label}</div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'var(--dark-2)', border: '1px solid var(--dark-3)' }}>
                <div style={{ color: 'var(--grey)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.75rem' }}>{tr.social_label}</div>
                <a href="https://www.facebook.com/gornikbrzeszcze" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: 1 }}>Facebook →</a>
              </div>
            </div>
            <div style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: 1, marginBottom: '2rem' }}>{tr.form_title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {tr.fields.map(([label, type, placeholder]) => (
                  <div key={label}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--grey)' }}>{label}</label>
                    <input type={type} placeholder={placeholder} style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--dark-3)', border: '1px solid var(--dark-3)', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none' }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--dark-3)'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--grey)' }}>{tr.message_label}</label>
                  <textarea rows={5} placeholder={tr.message_placeholder} style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--dark-3)', border: '1px solid var(--dark-3)', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--dark-3)'}
                  />
                </div>
                <button onClick={() => alert(tr.alert)} style={{ padding: '1rem', background: 'var(--green)', border: '1px solid var(--gold)', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: 3, textTransform: 'uppercase', cursor: 'pointer' }}>
                  {tr.submit}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
