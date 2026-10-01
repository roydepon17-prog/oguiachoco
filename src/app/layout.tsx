import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oguiachocs.com"),
  title: { default: "O'Guia Chocolates by DAD's Farm | Tree-to-Bar Cacao from Capiz", template: "%s | O'Guia Chocolates" },
  description: "O'Guia Chocolates by DAD's Farm creates farm-to-table, tree-to-bar chocolate from cacao grown and crafted in Maayon, Capiz, Philippines.",
  keywords: ["O'Guia Chocolates","DAD's Farm","Philippine cacao","Capiz chocolate","Maayon cacao","tree-to-bar chocolate","farm-to-table chocolate","tablea"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_PH", url: "/", siteName: "O'Guia Chocolates", title: "O'Guia Chocolates by DAD's Farm", description: "Tree-to-bar chocolate rooted in a living farm ecosystem in Maayon, Capiz.", images: [{ url: "/farm-hero.jpg", width: 1200, height: 630, alt: "Cacao at DAD's Farm in Maayon, Capiz" }] },
  twitter: { card: "summary_large_image", title: "O'Guia Chocolates by DAD's Farm", description: "Tree-to-bar chocolate from Maayon, Capiz.", images: ["/farm-hero.jpg"] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context":"https://schema.org","@type":"Organization","name":"O'Guia Chocolates by DAD's Farm","url":"https://www.oguiachocs.com","logo":"https://www.oguiachocs.com/oguia-logo.webp","description":"Tree-to-bar and farm-to-table chocolate from Maayon, Capiz, Philippines.","address":{"@type":"PostalAddress","addressLocality":"Maayon","addressRegion":"Capiz","addressCountry":"PH"}
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} /></head><body>{children}</body></html>;
}
