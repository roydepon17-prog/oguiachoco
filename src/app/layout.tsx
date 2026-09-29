import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://oguiachocolates.com"),
  title: { default: "O Guia Chocolates by DADs Farm | Philippine Cacao, Bean-to-Bar & Farm-to-Table", template: "%s | O Guia Chocolates" },
  description: "O Guia Chocolates by DADs Farm is a Philippine cacao and bean-to-bar chocolate venture rooted in Old Guia, Ma-ayon, Capiz—connecting regenerative farming, post-harvest craftsmanship and premium Filipino chocolate.",
  keywords: ["O Guia Chocolates","OGUIA Chocolates","DADs Farm","Philippine cacao","Capiz cacao","Ma-ayon cacao","Filipino chocolate","bean-to-bar chocolate Philippines","tablea Philippines","farm to bar chocolate","Philippine cacao investment"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_PH", siteName: "O Guia Chocolates by DADs Farm", url: "/", title: "From our farm in Capiz to the world.", description: "A farm-connected Philippine cacao and chocolate story—built around soil health, local value creation and O Guia Chocolates.", images: [{ url: "/images/cacao-farm.png", width: 1536, height: 1024, alt: "Cacao agroforestry farm at DADs Farm" }] },
  twitter: { card: "summary_large_image", title: "O Guia Chocolates by DADs Farm", description: "Philippine cacao, bean-to-bar chocolate and a diversified farm-to-table model.", images: ["/images/cacao-farm.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en-PH" className={`${bodoni.variable} ${manrope.variable}`}><body>{children}</body></html>;
}
