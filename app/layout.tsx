import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustGo - Coursier Express Casablanca | Livraison Rapide 24h/24",
  description: "🚀 Service de coursier professionnel à Casablanca. Livraison express de documents et colis en moins de 2h. Rapide, fiable, sécurisé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
