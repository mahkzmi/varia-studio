import { ArrowUpRight } from "lucide-react";
import { siteConfig as c } from "../data/siteConfig";

export default function Method() {
  return <section id="method" className="section-space method-section">
    <div className="site-wrap">
      <div className="section-heading-row">
        <div><p className="section-overline">03 / HOW WE WORK</p><h2 className="display-heading">Research is a start.<br /><span>Useful is the goal.</span></h2></div>
        <p className="section-aside">A grounded process for moving from domain questions to tools people can actually use.</p>
      </div>
      <div className="method-grid">
        {c.method.map((step) => <article className="method-card" key={step.n}>
          <span className="method-number">{step.n}</span><div className="method-rule" /><h3>{step.title}</h3><p>{step.text}</p>
        </article>)}
      </div>
      <div className="capabilities-wrap">
        <div><p className="section-overline">CAPABILITIES</p><h3>Where science<br />meets systems.</h3></div>
        <div className="capability-tags">{c.capabilities.map((item) => <span key={item}>{item}<ArrowUpRight size={13} /></span>)}</div>
      </div>
    </div>
  </section>;
}
