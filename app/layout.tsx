import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://acheterenchine-afrique.com"),
  title: {
    default: "AcheterEnChine-Afrique — Pack Service Unique 50 000 FCFA",
    template: "%s | AcheterEnChine-Afrique"
  },
  description:
    "AcheterEnChine-Afrique accompagne les entrepreneurs et particuliers africains pour sourcer, payer et expédier leurs produits depuis la Chine en toute sécurité.",
  keywords: [
    "sourcing chine afrique",
    "paiement fournisseur chine",
    "acheter en chine",
    "alipay wechat pay",
    "logistique chine afrique"
  ],
  openGraph: {
    title: "AcheterEnChine-Afrique — Pack Service Unique 50 000 FCFA",
    description:
      "Sourcing vérifié, paiement fournisseurs Alipay/WeChat, inspection et expédition Air 5–7 j ou Mer 45–60 j pour l'Afrique.",
    url: "https://acheterenchine-afrique.com",
    siteName: "AcheterEnChine-Afrique",
    images: [
      {
        url: "https://acheterenchine-afrique.com/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Dashboard sourcing AcheterEnChine-Afrique"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AcheterEnChine-Afrique — Pack Service Unique 50 000 FCFA",
    description:
      "Le pack complet pour sourcer et payer vos fournisseurs chinois avec un accompagnement end-to-end depuis l'Afrique.",
    site: "@acheterenchineafrique"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen`}
      >
        {children}
        {/* Google Analytics – insérer script gtag ici plus tard */}
        {/* Meta Pixel – insérer code pixel FB ici plus tard */}
      </body>
    </html>
  );
}
