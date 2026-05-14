import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });

export const metadata = { title: 'TrustGo', description: 'Livraison express Casablanca' };

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="dark">
      <body className={`${inter.className} ${space.variable}`}>
        <div className="promo">🎉 Offre de lancement : -20% sur toutes vos courses avec le code <b>TRUSTGO20</b></div>
        <header className="nav"><Link className="logo" href="/">TrustGo</Link><nav><Link href="/">Accueil</Link><Link href="/services">Services</Link><Link href="/booking">Commander</Link><Link href="/pricing">Tarifs</Link><Link href="/about">À propos</Link><Link href="/contact">Contact</Link><Link href="/login">Connexion</Link></nav><Link className="btn" href="/booking">Commander une course</Link></header>
        {children}
        <footer className="footer">TrustGo • Casablanca • 24/7 • contact@trustgo.ma</footer>
      </body>
    </html>
  );
}
