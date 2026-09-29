'use client';
import { ArrowRight, ChevronDown, Instagram, Menu, MapPin, Mail, X } from 'lucide-react';
import { useState } from 'react';

const products = [
  { cacao: '85%', name: 'Maayon Reserve', note: 'Dark · Reserve Batch', desc: 'Deep cacao character with a long, elegant finish.', tone: 'dark' },
  { cacao: '70%', name: 'Old Guia Milk', note: 'Milk · Signature Batch', desc: 'Creamy, rounded and gently roasted for everyday ritual.', tone: 'milk' },
  { cacao: '60%', name: 'Capiz Cacao', note: 'Dark Milk · Estate Batch', desc: 'A balanced expression of Philippine-grown cacao.', tone: 'copper' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="nav"><a className="brand" href="#top" aria-label="O'GUIA Chocolates home"><span>O’GUIA</span><small>CHOCOLATES</small></a>
      <nav className={open ? 'links open' : 'links'}><a href="#story" onClick={()=>setOpen(false)}>Our Story</a><a href="#collection" onClick={()=>setOpen(false)}>Collection</a><a href="#craft" onClick={()=>setOpen(false)}>Craft</a><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></nav>
      <a className="nav-cta" href="#collection">Explore chocolate <ArrowRight size={16}/></a>
      <button className="menu" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">DAD’s FARM · MA-AYON, CAPIZ</p><h1>Chocolate with a <em>sense of place.</em></h1><p className="lead">From cacao grown in Western Visayas to small-batch chocolate made with intention. O’GUIA brings the character of Capiz to every bar.</p><div className="actions"><a className="button primary" href="#collection">Discover the collection <ArrowRight size={17}/></a><a className="text-link" href="#story">Read our story <ArrowRight size={15}/></a></div></div>
        <div className="hero-art" aria-label="Artisan chocolate bar illustration"><div className="leaf leaf-a"/><div className="leaf leaf-b"/><div className="bar"><div className="bar-top">O’GUIA</div><div className="bar-mid">85%</div><div className="bar-bottom">MAAYON<br/>RESERVE</div></div><span className="stamp">CAPIZ<br/><b>PH</b></span></div>
      </section>

      <section className="marquee"><span>PHILIPPINE CACAO</span><i>✦</i><span>SMALL BATCH</span><i>✦</i><span>MA-AYON, CAPIZ</span><i>✦</i><span>CRAFTED WITH CARE</span></section>

      <section id="story" className="story section"><div className="section-kicker">01 / THE ORIGIN</div><div><h2>Rooted in the land.<br/><em>Made for the table.</em></h2><p>O’GUIA is a chocolate story born at DAD’s Farm in Brgy. Old Guia, Ma-ayon, Capiz. We believe exceptional chocolate starts long before the kitchen — in healthy soil, thoughtful farming, careful fermentation and respect for the people who grow cacao.</p><p>Our bars are an invitation to slow down and taste where they come from.</p><a className="text-link" href="#craft">How we craft it <ArrowRight size={15}/></a></div></section>

      <section id="collection" className="collection section"><div className="section-head"><div><div className="section-kicker">02 / THE COLLECTION</div><h2>Bars with <em>character.</em></h2></div><p>Small-batch expressions of Philippine cacao, each with its own rhythm, roast and finish.</p></div><div className="products">{products.map((p,i)=><article className="product" key={p.name}><div className={`product-art ${p.tone}`}><div className="mini-bar"><strong>{p.cacao}</strong><span>O’GUIA</span><small>{i===0?'RESERVE':i===1?'MILK':'ESTATE'}</small></div><span className="product-no">0{i+1}</span></div><div className="product-info"><p>{p.note}</p><h3>{p.name}</h3><span>{p.desc}</span></div></article>)}</div></section>

      <section id="craft" className="craft section"><div className="craft-image"><div className="roundel">CACAO<br/>TO<br/>CHOCOLATE</div><div className="bean bean1"/><div className="bean bean2"/><div className="bean bean3"/></div><div className="craft-copy"><div className="section-kicker">03 / THE CRAFT</div><h2>Nothing rushed.<br/><em>Nothing wasted.</em></h2><p>Our approach follows the cacao from farm to finished bar: harvest, ferment, dry, roast, refine and temper. Every step is designed to preserve the natural identity of the bean.</p><div className="steps"><div><b>01</b><span>Farm-grown cacao</span></div><div><b>02</b><span>Careful fermentation</span></div><div><b>03</b><span>Small-batch making</span></div></div></div></section>

      <section className="manifesto"><p className="eyebrow">THE O’GUIA PROMISE</p><h2>“Good chocolate should tell you <em>where it came from.</em>”</h2><p>Our goal is simple: make chocolate that honors cacao, celebrates Capiz, and creates more value at the farm.</p></section>

      <section id="contact" className="contact section"><div><div className="section-kicker">04 / FIND O’GUIA</div><h2>Bring a taste of<br/><em>Capiz home.</em></h2></div><div className="contact-card"><p>For wholesale, collaborations, investment conversations or chocolate inquiries:</p><a href="mailto:dadscacaofarm@gmail.com"><Mail size={17}/> dadscacaofarm@gmail.com</a><p className="address"><MapPin size={17}/> Brgy. Old Guia, Ma-ayon, Capiz, Philippines</p><a className="button dark" href="mailto:dadscacaofarm@gmail.com?subject=O%27GUIA%20Chocolate%20Inquiry">Start a conversation <ArrowRight size={17}/></a></div></section>
    </main>

    <footer><div className="footer-brand"><span>O’GUIA</span><small>CHOCOLATES BY DAD’s FARM</small></div><p>© {new Date().getFullYear()} O’GUIA Chocolates. Ma-ayon, Capiz, Philippines.</p><a href="https://instagram.com" aria-label="Instagram"><Instagram size={18}/></a></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({ '@context':'https://schema.org', '@type':'Brand', name:"O'GUIA Chocolates", description:'Artisan chocolate from Capiz, Philippines.', url:'https://oguiachocolates.com', locationCreated:'Ma-ayon, Capiz, Philippines' })}} />
  </>;
}
