import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { siteConfig as c } from "../data/siteConfig";
import { ProductIcon } from "./Icons";

function ProductDetail({ product, onClose }) {
  if (!product) return null;
  return <div className="detail-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="detail-panel" role="dialog" aria-modal="true" aria-labelledby="detail-title">
      <button className="detail-close" onClick={onClose} aria-label="Close details"><Minus size={18} /></button>
      <div className="detail-topline"><span>{product.index} / SELECTED WORK</span><span className={`status status-${product.statusTone}`}>{product.status}</span></div>
      <div className="detail-icon"><ProductIcon type={product.icon} size={28} /></div>
      <p className="section-overline">{product.discipline}</p>
      <h2 id="detail-title" className="detail-title">{product.name}</h2>
      <p className="detail-lead">{product.short}</p>
      <div className="detail-block"><h3>The problem</h3><p>{product.problem}</p></div>
      <div className="detail-block"><h3>Our approach</h3><p>{product.approach}</p></div>
      <div className="detail-metrics">{product.proof.map((m) => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div>
      <div className="detail-block"><h3>Tools & methods</h3><div className="tag-list">{product.stack.map((s) => <span key={s}>{s}</span>)}</div></div>
      <p className="detail-caveat">{product.caveat}</p>
      <a className="button-primary w-fit" href={product.href} target={product.href.startsWith("http") ? "_blank" : undefined} rel={product.href.startsWith("http") ? "noreferrer" : undefined}>{product.action}<ArrowUpRight size={16} /></a>
    </section>
  </div>;
}

export default function Work() {
  const [selected, setSelected] = useState(null);
  return <section id="work" className="section-space work-section">
    <div className="site-wrap">
      <div className="section-heading-row">
        <div><p className="section-overline">02 / SELECTED WORK</p><h2 className="display-heading">Built for <span>the field.</span></h2></div>
        <p className="section-aside">Three focused directions.<br />One applied intelligence studio.</p>
      </div>
      <div className="work-list">
        {c.products.map((p) => <article className="work-card" key={p.id}>
          <div className="work-card-index">{p.index}</div>
          <div className="work-card-icon"><ProductIcon type={p.icon} size={25} /></div>
          <div className="work-card-main">
            <div className="flex flex-wrap items-center gap-3"><span className="work-discipline">{p.discipline}</span><span className={`status status-${p.statusTone}`}>{p.status}</span></div>
            <h3>{p.name}</h3><p>{p.short}</p>
            <div className="work-metrics">{p.proof.map((m) => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div>
          </div>
          <button className="work-open" onClick={() => setSelected(p)} aria-label={`View ${p.name} details`}><span>Explore</span><ArrowUpRight size={18} /></button>
        </article>)}
      </div>
      <p className="metrics-footnote">Performance figures are project-specific reported results. See each project’s methodology and limitations before interpreting them as field outcomes.</p>
    </div>
    <ProductDetail product={selected} onClose={() => setSelected(null)} />
  </section>;
}
