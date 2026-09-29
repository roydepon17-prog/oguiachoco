import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://oguiachocolates.com'),
  title: { default: "O'GUIA Chocolates | Artisan Cacao from Capiz", template: "%s | O'GUIA Chocolates" },
  description: "O'GUIA Chocolates by DAD's Farm — artisan chocolate rooted in cacao, craft, and the heritage of Brgy. Old Guia, Ma-ayon, Capiz, Philippines.",
  keywords: ['O Guia Chocolates','O\'GUIA chocolate','Capiz cacao','Philippine cacao','artisan chocolate Philippines','DADs Farm'],
  alternates: { canonical: '/' },
  openGraph: {
    title: "O'GUIA Chocolates | Artisan Cacao from Capiz",
    description: 'From cacao grown in Capiz to carefully crafted chocolate, discover the O’GUIA story.',
    url: '/', siteName: "O'GUIA Chocolates", locale: 'en_PH', type: 'website'
  },
  twitter: { card: 'summary_large_image', title: "O'GUIA Chocolates", description: 'Artisan chocolate from Capiz, Philippines.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
