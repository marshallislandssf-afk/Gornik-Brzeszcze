'use client';
import { createContext, useContext, useState } from 'react';
import { t } from './translations';

const LanguageContext = createContext({ lang: 'pl', setLang: () => {}, t: t['pl'] });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pl');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  return context;
}
