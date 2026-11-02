import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig as c } from "../data/siteConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/80 backdrop-blur-2xl">
      <nav className="site-wrap flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="brand-lockup" aria-label={`${c.brand.name} home`}>
          <span className="brand-mark">{c.brand.mark}</span>
          <span>{c.brand.name}<i>.</i></span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {c.navigation.map((item) => <a className="nav-link" href={item.href} key={item.label}>{item.label}</a>)}
        </div>
        <a href="#contact" className="nav-cta hidden md:inline-flex">Let’s talk <ArrowUpRight size={14} /></a>
        <button className="mobile-toggle md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && <div className="mobile-menu md:hidden">
        {c.navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="mobile-menu-cta">Start a conversation <ArrowUpRight size={15} /></a>
      </div>}
    </header>
  );
}
