'use client';
import { useLang } from '../LanguageContext';


const newsFull = {
  pl: [
    { id: 1, date: '18 maja 2025', category: 'Mecz', title: 'Zwycięstwo 3:1 w derbach powiatu!', excerpt: 'Górnik Brzeszcze wraca na zwycięską ścieżkę po efektownym zwycięstwie w lokalnym derby z LKS Zator. Bramki strzelili Lewandowski (2) i Dąbrowski.' },
    { id: 2, date: '12 maja 2025', category: 'Klub', title: 'Nowy sponsor dla pierwszej drużyny', excerpt: 'Cieszymy się, że możemy ogłosić nowe partnerstwo z lokalną firmą budowlaną BAUBRZESZCZE. Umowa podpisana na sezon 2024/25.' },
    { id: 3, date: '5 maja 2025', category: 'Akademia', title: 'Akademia otwarta dla dzieci 8–12 lat', excerpt: 'Zapisy do akademii piłkarskiej na sezon 2025/26 już otwarte. Zapraszamy wszystkich chętnych!' },
    { id: 4, date: '28 kwietnia 2025', category: 'Mecz', title: 'Porażka 0:2 ze Skawą Wadowice', excerpt: 'Wyjazdowy mecz z silną Skawą Wadowice zakończył się porażką. Mimo dobrej gry nie udało się przełamać rywala.' },
    { id: 5, date: '20 kwietnia 2025', category: 'Klub', title: 'Remont szatni w toku', excerpt: 'Klub finalizuje remont szatni na stadionie. Prace mają zakończyć się przed kolejnym sezonem domowym.' },
    { id: 6, date: '14 kwietnia 2025', category: 'Mecz', title: 'Hat-trick Rafała Szymańskiego!', excerpt: 'Napastnik Górnika strzelił trzy gole w meczu ze Spartakiem Libiąż, zapewniając drużynie wygraną 4:0.' },
  ],
  en: [
    { id: 1, date: '18 May 2025', category: 'Match', title: '3:1 victory in the county derby!', excerpt: 'Górnik Brzeszcze return to winning ways with an impressive derby win over LKS Zator. Goals from Lewandowski (2) and Dąbrowski.' },
    { id: 2, date: '12 May 2025', category: 'Club', title: 'New sponsor for the first team', excerpt: 'We are delighted to announce a new partnership with local construction firm BAUBRZESZCZE for the 2024/25 season.' },
    { id: 3, date: '5 May 2025', category: 'Academy', title: 'Academy open for children aged 8–12', excerpt: 'Registration for the 2025/26 football academy season is now open. Everyone is welcome!' },
    { id: 4, date: '28 April 2025', category: 'Match', title: '0:2 defeat to Skawa Wadowice', excerpt: 'The away trip to strong Skawa Wadowice ended in defeat. Despite a good performance we could not break the deadlock.' },
    { id: 5, date: '20 April 2025', category: 'Club', title: 'Changing room renovation underway', excerpt: 'The club is finalising renovation of the changing rooms at the stadium. Work is due to be completed before the next home season.' },
    { id: 6, date: '14 April 2025', category: 'Match', title: 'Rafał Szymański hat-trick!', excerpt: 'The Górnik striker scored three goals against Spartak Libiąż to secure a 4:0 victory. Outstanding form.' },
  ],
};

const catColors = { 'Mecz': 'var(--gold)', 'Match': 'var(--gold)', 'Klub': '#2E86C8', 'Club': '#2E86C8', 'Akademia': '#27A847', 'Academy': '#27A847' };

export default function NewsPage() {
  const { lang, t } = useLang();
  const tr = t.news;
  const news = newsFull[lang];
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
          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '3rem', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gold)' }} />
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ background: 'var(--green)', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.25rem 0.75rem', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase' }}>{tr.featured}</span>
              <span style={{ color: 'var(--grey)', fontFamily: 'var(--font-heading)', fontSize: '0.8rem' }}>{news[0].date}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: 1, marginBottom: '1rem', lineHeight: 1.1 }}>{news[0].title}</h2>
            <p style={{ color: 'var(--light-grey)', lineHeight: 1.8, maxWidth: 700, marginBottom: '1.5rem' }}>{news[0].excerpt}</p>
            <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>{tr.read_more}</span>
          </div>
          <div className="grid-3">
            {news.slice(1).map(article => (
              <div key={article.id} style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '2rem', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ padding: '0.2rem 0.6rem', background: `${catColors[article.category]}22`, color: catColors[article.category], fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', border: `1px solid ${catColors[article.category]}44` }}>{article.category}</span>
                  <span style={{ color: 'var(--grey)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)' }}>{article.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{article.title}</h3>
                <p style={{ color: 'var(--grey)', fontSize: '0.9rem', lineHeight: 1.7 }}>{article.excerpt}</p>
                <div style={{ marginTop: '1.5rem', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{tr.read_more}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
