import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "70% Dark Chocolate", meta: "Single-estate cacao · 70% cacao", price: "₱170", image: "/images/cacao-farm.png" },
  { name: "Pure Tablea", meta: "Traditional cacao · 100% cacao", price: "₱—", image: "/farm-hero.jpg" },
  { name: "Keto Sugar-Free Chocolate", meta: "70% cacao · monk fruit erythritol", price: "₱—", image: "/images/cacao-farm.png" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="O'Guia Chocolates home">
          <Image src="/oguia-logo.webp" alt="O'Guia Chocolates by DAD's Farm" width={54} height={54} priority />
          <span><strong>O'GUIA</strong><small>CHOCOLATES BY DAD'S FARM</small></span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#origin">Origin</a><a href="#collection">Collection</a><a href="#craft">Craft</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#collection">Explore Chocolate</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-image" src="/farm-hero.jpg" alt="Cacao growing at DAD's Farm in Maayon, Capiz" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">MAAYON, CAPIZ · WESTERN VISAYAS</p>
          <h1 id="hero-title">Great chocolate begins beneath the soil.</h1>
          <p className="hero-copy">Tree-to-bar chocolate rooted in a living farm ecosystem—crafted from cacao grown, fermented and transformed at DAD's Farm.</p>
          <div className="actions"><a className="button primary" href="#collection">Discover the collection</a><a className="button ghost" href="#origin">Our origin</a></div>
        </div>
        <div className="hero-note">SINGLE-ESTATE CACAO<br /><span>OLD GUIA · MAAYON · CAPIZ</span></div>
      </section>

      <section id="origin" className="editorial section">
        <div className="section-label">01 / PROVENANCE</div>
        <div className="editorial-grid">
          <div><p className="eyebrow">Nurtured beneath the canopy</p><h2>Chocolate with a sense of place.</h2></div>
          <div><p>At DAD's Farm, cacao grows among fruit-bearing and native trees in a diversified agroforestry landscape. Healthy soil, biodiversity and careful post-harvest work shape the character of every bean.</p><p>From farm to finished chocolate, O'Guia Chocolates keeps the story close to its source in Old Guia, Maayon, Capiz.</p><a className="text-link" href="#craft">Follow the craft →</a></div>
        </div>
      </section>

      <section id="collection" className="collection section">
        <div className="section-heading"><div><p className="eyebrow">02 / THE COLLECTION</p><h2>Chocolate, close to origin.</h2></div><p>Dark, expressive and made with intention. Explore OGuia's farm-rooted chocolate collection.</p></div>
        <div className="product-grid">{products.map((p) => <article className="product-card" key={p.name}><div className="product-image"><Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="product-body"><span className="product-meta">{p.meta}</span><h3>{p.name}</h3><div className="product-bottom"><span>{p.price}</span><a href="#contact" aria-label={`Ask about ${p.name}`}>Details →</a></div></div></article>)}</div>
      </section>

      <section id="craft" className="craft section">
        <div className="craft-image"><Image src="/images/cacao-farm.png" alt="Cacao farm ecosystem at DAD's Farm" fill sizes="(max-width: 768px) 100vw, 50vw" /></div>
        <div className="craft-copy"><p className="eyebrow">03 / TREE TO BAR</p><h2>From living soil to finished bar.</h2><p>Our process respects the character of the cacao: thoughtful fermentation, patient drying and careful chocolate making. No unnecessary embellishment—just cacao, craft and provenance.</p><div className="stats"><div><strong>70%</strong><span>Dark cacao</span></div><div><strong>100%</strong><span>Pure tablea</span></div><div><strong>2017</strong><span>Farm established</span></div></div></div>
      </section>

      <section className="manifesto section"><p className="eyebrow">04 / OUR PROMISE</p><h2>Restore the land.<br />Empower the community.<br />Transform cacao.</h2><p>OGuia Chocolates connects regenerative farming, local sourcing and Philippine cacao heritage with an accessible farm-to-table chocolate experience.</p></section>

      <section id="contact" className="contact section"><div><p className="eyebrow">05 / CONNECT</p><h2>Bring O'Guia to your table.</h2><p>For orders, partnerships, wholesale and farm-to-table collaborations, get in touch with O'Guia Chocolates by DAD's Farm.</p></div><a className="button primary" href="mailto:oguiachocolates@gmail.com">Contact O'Guia</a></section>

      <footer><div><strong>O'GUIA CHOCOLATES</strong><span>BY DAD'S FARM · MAAYON, CAPIZ</span></div><span>© {new Date().getFullYear()} O'Guia Chocolates. All rights reserved.</span></footer>
    </main>
  );
}
