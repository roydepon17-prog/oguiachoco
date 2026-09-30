import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oguiachocolates.com"),
  title: { default: "O Guia Chocolates by DADs Farm | Philippine Cacao, Bean-to-Bar & Farm-to-Table", template: "%s | O Guia Chocolates" },
  description: "O Guia Chocolates by DADs Farm is a Philippine cacao and bean-to-bar chocolate venture rooted in Old Guia, Ma-ayon, Capiz—connecting regenerative farming, post-harvest craftsmanship and premium Filipino chocolate.",
  keywords: ["O Guia Chocolates","OGUIA Chocolates","DADs Farm","Philippine cacao","Capiz cacao","Ma-ayon cacao","Filipino chocolate","bean-to-bar chocolate Philippines","tablea Philippines","farm to bar chocolate","Philippine cacao investment"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_PH", siteName: "O Guia Chocolates by DADs Farm", url: "/", title: "From our farm in Capiz to the world.", description: "A farm-connected Philippine cacao and chocolate story—built around soil health, local value creation and O Guia Chocolates.", images: [{ url: "/oguia-logo.webp", width: 225, height: 240, alt: "O Guia Chocolates by DADs Farm logo" }] },
  twitter: { card: "summary_large_image", title: "O Guia Chocolates by DADs Farm", description: "Philippine cacao, bean-to-bar chocolate and a diversified farm-to-table model.", images: ["/oguia-logo.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en-PH"><body>{children}</body></html>;
}
