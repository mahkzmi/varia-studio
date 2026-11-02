import { ArrowUpRight, Linkedin } from "lucide-react";
import { siteConfig as c } from "../data/siteConfig";

export default function Studio() {
  return <section id="studio" className="section-space studio-section">
    <div className="site-wrap grid gap-12 md:grid-cols-[.7fr_1.3fr]">
      <div><p className="section-overline">04 / THE PERSON BEHIND THE WORK</p><div className="founder-monogram">MK<span>·</span></div></div>
      <div>
        <p className="founder-role">{c.founder.role}</p>
        <h2 className="display-heading">{c.founder.name}<span className="text-signal">.</span></h2>
        <p className="founder-statement">“{c.founder.statement}”</p>
        <p className="body-large max-w-2xl">{c.founder.bio}</p>
        <a href={c.contact.linkedin} target="_blank" rel="noreferrer" className="text-link mt-8 inline-flex">Connect on LinkedIn <ArrowUpRight size={15} /></a>
      </div>
    </div>
  </section>;
}
