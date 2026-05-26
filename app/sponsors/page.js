'use client';
import { useLang } from '../LanguageContext';

const sponsors = [
  { name: 'BAUBRZESZCZE', typePl: 'Sponsor główny', typeEn: 'Main sponsor', descPl: 'Firma budowlana z Brzeszcz. Partner strategiczny klubu od 2024.', descEn: 'Construction firm from Brzeszcze. Strategic club partner since 2024.' },
  { name: 'Kopalnia Brzeszcze', typePl: 'Partner', typeEn: 'Partner', descPl: 'Historyczny partner klubu, związany z Górnikiem od samego początku.', descEn: 'Historic club partner, linked with Górnik since the very beginning.' },
  { name: 'Gmina Brzeszcze', typePl: 'Patron honorowy', typeEn: 'Honorary patron', descPl: 'Wsparcie instytucjonalne i infrastrukturalne dla naszej drużyny.', descEn: 'Institutional and infrastructure support for our team.' },
  { name: 'AUTO-OŚWIĘCIM', typePl: 'Sponsor', typeEn: 'Sponsor', descPl: 'Dealerstwo samochodowe z regionu oświęcimskiego.', descEn: 'Car dealership from the Oświęcim region.' },
  { name: 'PIEKARNIA KOWALSKI', typePl: 'Sponsor', typeEn: 'Sponsor', descPl: 'Lokalna piekarnia wspierająca sport w Brzeszczach.', descEn: 'Local bakery supporting sport in Brzeszcze.' },
  { name: 'EURO-BUD', typePl: 'Sponsor', typeEn: 'Sponsor', descPl: 'Firma z branży budowlanej, dumny partner Górnika.', descEn: 'Construction company and proud partner of Górnik.' },
];

export default function SponsorsPage() {
  const { lang, t } = useLang();
  const tr = t.sponsors;
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
          <div style={{ maxWidth: 700, marginBottom: '4rem' }}>
            <p style={{ color: 'var(--light-grey)', fontSize: '1.05rem', lineHeight: 1.9 }}>{tr.intro}</p>
          </div>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{tr.main_label}</div>
            <div className="sponsor-main" style={{ background: 'var(--dark-2)', border: '1px solid var(--gold)', padding: '2.5rem' }}>
              <div style={{ height: 100, background: 'var(--dark-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: 2, color: 'var(--grey)' }}>LOGO</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: 1, marginBottom: '0.5rem' }}>{sponsors[0].name}</h3>
                <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: 3, textTransform: 'uppercase', marginBottom: '1rem' }}>{lang === 'en' ? sponsors[0].typeEn : sponsors[0].typePl}</div>
                <p style={{ color: 'var(--grey)', lineHeight: 1.8 }}>{lang === 'en' ? sponsors[0].descEn : sponsors[0].descPl}</p>
              </div>
            </div>
          </div>
          <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{tr.others_label}</div>
          <div className="grid-3">
            {sponsors.slice(1).map(s => (
              <div key={s.name} style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '2rem' }}>
                <div style={{ height: 70, background: 'var(--dark-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: 2, color: 'var(--grey)' }}>LOGO</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>{s.name}</h4>
                <div style={{ color: 'var(--gold)', fontSize: '0.7rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.75rem' }}>{lang === 'en' ? s.typeEn : s.typePl}</div>
                <p style={{ color: 'var(--grey)', fontSize: '0.85rem', lineHeight: 1.7 }}>{lang === 'en' ? s.descEn : s.descPl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--dark)', padding: '6rem 0' }}>
        <div className="container">
          <div className="become-sponsor-grid">
            <div>
              <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{tr.become_label}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: 1, marginBottom: '1.5rem' }}>{tr.become_title}</h2>
              <p style={{ color: 'var(--light-grey)', lineHeight: 1.9, marginBottom: '2rem' }}>{tr.become_text}</p>
              <a href="/contact" style={{ display: 'inline-block', background: 'var(--green)', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.85rem 2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: 2, textTransform: 'uppercase' }}>{tr.become_btn}</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tr.benefits.map(benefit => (
                <div key={benefit} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', background: 'var(--dark-2)', border: '1px solid var(--dark-3)' }}>
                  <div style={{ width: 8, height: 8, background: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
