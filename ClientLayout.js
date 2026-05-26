'use client';
import { LanguageProvider } from '../app/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
