import { ArrowUpRight } from "lucide-react";
import { siteConfig as c } from "../data/siteConfig";

export default function Footer() {
  return <footer className="site-footer">
    <div className="site-wrap flex flex-col justify-between gap-7 py-8 md:flex-row md:items-end">
      <div><a href="#top" className="brand-lockup"><span className="brand-mark">{c.brand.mark}</span><span>{c.brand.name}<i>.</i></span></a><p className="mt-3 text-xs text-dim">{c.footer.note}</p></div>
      <div className="flex flex-wrap items-center gap-6">{c.footer.links.map((l) => <a key={l.label} href={l.href} className="footer-link">{l.label}<ArrowUpRight size={12} /></a>)}</div>
      <p className="text-xs text-dim">{c.brand.copyright}</p>
    </div>
  </footer>;
}
