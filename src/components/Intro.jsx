import { siteConfig as c } from "../data/siteConfig";

export default function Intro() {
  return <section id="intro" className="section-space intro-section">
    <div className="site-wrap grid gap-12 md:grid-cols-[.7fr_1.3fr]">
      <div className="section-index">{c.intro.index}</div>
      <div>
        <p className="section-overline">A DIFFERENT KIND OF AI STUDIO</p>
        <h2 className="display-heading">{c.intro.title}<br /><span>{c.intro.highlight}</span></h2>
        <p className="body-large max-w-2xl">{c.intro.body}</p>
      </div>
    </div>
  </section>;
}
