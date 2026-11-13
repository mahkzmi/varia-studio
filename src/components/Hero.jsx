import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig as c } from "../data/siteConfig";

function OrbitalMark() {
  return <div className="orbital-art" aria-hidden="true">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
    <div className="orbital-core"><span>V</span></div>
    <span className="orbit-label label-a">SOIL / 01</span>
    <span className="orbit-label label-b">VISION / 02</span>
    <span className="orbit-label label-c">DATA / 03</span>
    <span className="orbit-dot dot-a" /><span className="orbit-dot dot-b" /><span className="orbit-dot dot-c" />
  </div>;
}

export default function Hero() {
  return <section id="top" className="hero-section">
    <div className="hero-grid" />
    <div className="site-wrap relative z-10 grid min-h-[790px] items-center gap-10 pb-20 pt-36 lg:grid-cols-[1.15fr_.85fr]">
      <div className="hero-copy animate-rise">
        <div className="eyebrow"><span className="eyebrow-line" />{c.brand.eyebrow}</div>
        <p className="hero-kicker">{c.hero.tag}</p>
        <h1>{c.hero.headlineA}<br />{c.hero.headlineB}<br /><em>{c.hero.headlineC}</em></h1>
        <p className="hero-description">{c.hero.description}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#work" className="button-primary" href="#contact">{c.hero.primaryLabel}<ArrowUpRight size={16} /></a>
          <a href="#contact" className="button-quiet" href="#work">{c.hero.secondaryLabel}<ArrowUpRight size={15} /></a>
        </div>
        <div className="hero-footnote"><span className="pulse-dot" /> {c.brand.location}</div>
      </div>
      <div className="hidden items-center justify-center lg:flex"><OrbitalMark /></div>
      <a href="#intro" className="hero-scroll hidden items-center gap-3 lg:flex"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      <div className="hero-index hidden lg:block">001 — 004</div>
    </div>
  </section>;
}
