import { ArrowUpRight, Mail, Linkedin, Twitter } from "lucide-react";
import { siteConfig as c } from "../data/siteConfig";

export default function Contact() {
  return <section id="contact" className="contact-section">
    <div className="site-wrap">
      <div className="contact-panel">
        <div className="contact-glow" />
        <div className="relative z-10">
          <p className="section-overline">05 / OPEN FOR THE RIGHT PROBLEMS</p>
          <h2>{c.contact.title}<br /><em>{c.contact.titleAccent}</em></h2>
          <p className="contact-description">{c.contact.description}</p>
          <a href={`mailto:${c.contact.email}`} className="button-primary mt-9">Tell me what you're building <ArrowUpRight size={16} /></a>
          <div className="contact-links">
            <a href={`mailto:${c.contact.email}`}><Mail size={16} /><span>{c.contact.email}</span><ArrowUpRight size={14} /></a>
            <a href={c.contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /><span>LinkedIn</span><ArrowUpRight size={14} /></a>
            <a href={c.contact.x} target="_blank" rel="noreferrer"><Twitter size={16} /><span>{c.contact.handle}</span><ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="contact-coordinate" aria-hidden="true">35°41' N<br />51°25' E<br /><span>ROOTED HERE.<br />CONNECTED EVERYWHERE.</span></div>
      </div>
    </div>
  </section>;
}
