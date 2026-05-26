'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '../app/LanguageContext';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const tr = t.nav;
  

  const links = [
    { href: '/', label: tr.home },
    { href: '/about', label: tr.about },
    { href: '/team', label: tr.team },
    { href: '/fixtures', label: tr.fixtures },
    { href: '/results', label: tr.results },
    { href: '/news', label: tr.news },
    { href: '/history', label: tr.history },
    { href: '/gallery', label: tr.gallery },
    { href: '/sponsors', label: tr.sponsors },
    { href: '/contact', label: tr.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1E241E' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s',
        padding: '0 2rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 44, height: 48,
              background: 'linear-gradient(135deg, #1A5C2A 50%, #0A0A0A 50%)',
              clipPath: 'polygon(50% 0%, 100% 15%, 100% 70%, 50% 100%, 0% 70%, 0% 15%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', fontFamily: 'var(--font-display)', color: '#C9A84C',
              flexShrink: 0, outline: '2px solid #C9A84C', outlineOffset: '-4px',
            }}>G</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: 1, lineHeight: 1 }}>GÓRNIK</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: 3, color: 'var(--gold)', lineHeight: 1, marginTop: 2 }}>BRZESZCZE</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '0.1rem', alignItems: 'center' }} className="nav-desktop">
            {links.slice(1).map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.75rem',
                letterSpacing: '1.5px', textTransform: 'uppercase', padding: '0.4rem 0.5rem',
                color: pathname === l.href ? 'var(--gold)' : 'var(--light-grey)',
                borderBottom: pathname === l.href ? '2px solid var(--gold)' : '2px solid transparent',
                transition: 'color 0.2s',
              }}>{l.label}</Link>
            ))}

            {/* Language toggle */}
            <div style={{ display: 'flex', marginLeft: '1rem', border: '1px solid var(--dark-3)', overflow: 'hidden' }}>
              {['pl', 'en'].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '0.3rem 0.6rem',
                  background: lang === l ? 'var(--gold)' : 'transparent',
                  color: lang === l ? 'var(--black)' : 'var(--grey)',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  fontSize: '0.7rem', letterSpacing: 1, textTransform: 'uppercase',
                  transition: 'all 0.2s',
                }}>{l}</button>
              ))}
            </div>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="nav-hamburger" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column', gap: 5, padding: 4,
          }}>
            <span style={{ width: 24, height: 2, background: open ? 'var(--gold)' : 'var(--white)', display: 'block', transition: 'transform 0.3s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ width: 24, height: 2, background: 'var(--white)', display: 'block', opacity: open ? 0 : 1, transition: 'opacity 0.3s' }} />
            <span style={{ width: 24, height: 2, background: open ? 'var(--gold)' : 'var(--white)', display: 'block', transition: 'transform 0.3s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 70, left: 0, right: 0, bottom: 0,
        background: 'rgba(10,10,10,0.98)', zIndex: 999,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s ease',
        display: 'flex', flexDirection: 'column', padding: '2rem', gap: '0.5rem',
        overflowY: 'auto',
      }}>
        {/* Mobile language toggle */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          {['pl', 'en'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: '0.4rem 1.2rem',
              background: lang === l ? 'var(--gold)' : 'var(--dark-2)',
              color: lang === l ? 'var(--black)' : 'var(--grey)',
              border: '1px solid var(--dark-3)', cursor: 'pointer',
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase',
            }}>{l.toUpperCase()}</button>
          ))}
        </div>
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: 2,
            color: pathname === l.href ? 'var(--gold)' : 'var(--white)',
            padding: '0.5rem 0', borderBottom: '1px solid var(--dark-3)',
          }}>{l.label}</Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
