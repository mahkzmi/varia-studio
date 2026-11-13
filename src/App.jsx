import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleDot, Cpu, Crosshair, Database, Layers3, Linkedin, Mail, Menu, ScanLine, ShieldCheck, Sprout, X } from "lucide-react";
import { useState } from "react";

const email = "mah.kzmi21@gmail.com";
const linkedin = "https://www.linkedin.com/in/mahdieh-kazemi-505bab319/";
const mailto = (subject, body = "") => `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function Brand() {
  return <a className="brand" href="#top" aria-label="Varia Studio home"><span className="brand-symbol">V<span>.</span></span><span>VARIA<span className="brand-light"> STUDIO</span></span></a>;
}

function DetectionPreview() {
  return <div className="vision-preview" aria-label="Illustrative crop and weed detection interface">
    <div className="preview-top"><span><i className="live-dot" /> VISION / IMAGE REVIEW</span><span>ILLUSTRATIVE UI</span></div>
    <div className="field-image">
      <div className="field-row row-one" /><div className="field-row row-two" /><div className="field-row row-three" /><div className="field-row row-four" />
      <div className="detection-box weed box-a"><b>WEED</b><small>0.91</small></div>
      <div className="detection-box crop box-b"><b>CROP</b><small>0.96</small></div>
      <div className="detection-box weed box-c"><b>WEED</b><small>0.84</small></div>
      <div className="detection-box crop box-d"><b>CROP</b><small>0.89</small></div>
      <div className="scan-line" />
    </div>
    <div className="preview-legend"><span><i className="legend-crop" /> Crop detection</span><span><i className="legend-weed" /> Weed detection</span><span className="preview-disclaimer">Conceptual illustration — not a customer result</span></div>
    <div className="preview-bottom"><span>RGB AERIAL IMAGERY</span><span>MODEL OUTPUT · REVIEW REQUIRED</span></div>
  </div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["The approach", "#approach"], ["Evaluation", "#evaluation"], ["Studio", "#studio"]];
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <Brand />
    <div className="nav-links">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
    <a className="nav-cta" href="#contact">Discuss an evaluation <ArrowUpRight size={15} /></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
  </nav>{open && <div className="mobile-nav">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Discuss an evaluation <ArrowUpRight size={15}/></a></div>}</header>;
}

function Hero() {
  return <section className="hero section-wrap" id="top">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-mark" /> APPLIED AI FOR AGRICULTURE <span className="eyebrow-line" /></div>
      <p className="hero-label">AERIAL IMAGERY → FIELD-LEVEL INSIGHT</p>
      <h1>Make every field image <em>more useful.</em></h1>
      <p className="hero-lead">Evaluate crop and weed detection on your own drone imagery — before committing to a larger workflow.</p>
      <div className="hero-actions"><a className="button button-primary" href="#evaluation">Explore a paid evaluation <ArrowUpRight size={17}/></a><a className="text-action" href="#approach">See how it works <ArrowDownRight size={16}/></a></div>
      <div className="hero-proofline"><span><Check size={14}/> Customer-image evaluation</span><span><Check size={14}/> Transparent limitations</span><span><Check size={14}/> Scoped before work begins</span></div>
    </div>
    <div className="hero-visual"><div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><DetectionPreview/><div className="visual-note"><span className="note-index">01 / 03</span><span>FROM RAW CAPTURE<br/>TO REVIEWABLE OUTPUT</span></div></div>
    <div className="hero-bottom"><span>INDEPENDENT AGTECH SOFTWARE STUDIO</span><span>FROM IRAN · FOR THE WORLD</span></div>
  </section>;
}

function TrustStrip() {
  return <section className="trust-strip"><div className="section-wrap trust-inner"><div><span className="trust-number">01</span><span>Soil science<br/>domain knowledge</span></div><div><span className="trust-number">02</span><span>Applied machine<br/>learning</span></div><div><span className="trust-number">03</span><span>Geospatial data<br/>workflows</span></div><div><span className="trust-number">04</span><span>Software built<br/>for real use</span></div></div></section>;
}

function Problem() {
  return <section className="section-wrap section-block problem-block" id="approach">
    <div className="section-kicker">01 / THE OPPORTUNITY</div><div className="problem-grid"><div><h2>Collecting imagery is one thing.<br/><em>Knowing what it tells you is another.</em></h2></div><div className="problem-copy"><p>Drone service providers and agricultural teams can capture large volumes of field imagery. Turning those images into consistent crop and weed observations is a separate operational challenge.</p><p>Varia Vision is an experimental computer-vision workflow designed to explore that step — with your imagery, your conditions, and the limitations made visible.</p></div></div>
    <div className="feature-grid"><article><Crosshair/><h3>Crop & weed detection</h3><p>Explore object-level detections in RGB aerial imagery.</p></article><article><ScanLine/><h3>Image-level review</h3><p>Inspect outputs and examples rather than relying on a headline score.</p></article><article><ShieldCheck/><h3>Evidence before scale</h3><p>Identify failure cases and fit before discussing integration or deployment.</p></article></div>
  </section>;
}

function Evaluation() {
  const items = ["A review of the supplied imagery and its suitability for evaluation", "Detection outputs on an agreed sample of images", "A concise summary of observed strengths, errors and failure cases", "A technical discussion of next steps, integration needs and open risks"];
  return <section className="evaluation-section" id="evaluation"><div className="section-wrap evaluation-grid">
    <div><div className="section-kicker">02 / A SMALL, DEFINED FIRST STEP</div><h2>Start with an <em>evaluation.</em><br/>Not a leap of faith.</h2><p className="evaluation-lead">A paid, bounded technical evaluation helps both sides decide whether the workflow is useful on the imagery that matters to you.</p><a className="button button-primary" href={mailto("Varia Vision — evaluation scope", "Hello Varia Studio,\n\nI'd like to discuss an evaluation using our aerial imagery.\n\nCrop / use case:\nLocation:\nImage format / sample size:\nWhat we want to learn:\n")}>Discuss your evaluation <ArrowUpRight size={17}/></a></div>
    <div className="deliverable-card"><div className="deliverable-head"><span>WHAT THE EVALUATION CAN INCLUDE</span><span>01—04</span></div>{items.map((item,i)=><div className="deliverable-row" key={item}><span>0{i+1}</span><p>{item}</p><Check size={16}/></div>)}<div className="deliverable-foot"><span>Scope, timeline and fee</span><strong>Agreed before work starts</strong></div></div>
  </div></section>;
}

function Process() {
  const steps = [{n:"01",title:"Share a sample",text:"Tell us about the crop, location, capture method and the decision you want to support."},{n:"02",title:"Agree the scope",text:"We review suitability, define the sample size and confirm deliverables, timing and fee."},{n:"03",title:"Evaluate the output",text:"We run the agreed assessment and document what works, what fails and what remains unknown."},{n:"04",title:"Decide with evidence",text:"Review the findings together and decide whether a next-stage pilot is justified."}];
  return <section className="section-wrap section-block process-block"><div className="section-kicker">03 / HOW IT WORKS</div><div className="section-heading"><h2>A clear process.<br/><em>No black-box promises.</em></h2><p>We make the first engagement small enough to assess, and specific enough to be useful.</p></div><div className="process-grid">{steps.map(s=><article key={s.n}><span>{s.n}</span><div className="process-rule"/><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></section>;
}

function Evidence() {
  return <section className="evidence-section"><div className="section-wrap evidence-grid"><div><div className="section-kicker">04 / CURRENT TECHNICAL BASELINE</div><h2>Promising benchmark.<br/><em>Honest about the gap.</em></h2><p>Varia Vision is a benchmarked prototype. The figures below describe internal validation only; they are not independent, customer-specific or field-validation results.</p></div><div className="metrics-grid"><div><strong>0.788</strong><span>mAP50 · internal validation</span></div><div><strong>5.2 ms</strong><span>Inference time · T4 benchmark</span></div><div><strong>YOLOv8n</strong><span>Model architecture</span></div><div><strong>RGB</strong><span>Aerial image input focus</span></div></div></div><div className="section-wrap evidence-foot"><ShieldCheck size={17}/><p>Actual performance depends on image resolution, altitude, crop type, lighting, growth stage, annotation quality and field conditions. The evaluation exists to measure fit on your data — not to assume it.</p></div></section>;
}

function Studio() {
  return <section className="section-wrap section-block studio-block" id="studio"><div className="studio-mark"><Sprout size={36}/><span>V / S</span></div><div className="studio-copy"><div className="section-kicker">05 / THE STUDIO</div><h2>Science in the loop.<br/><em>Software in the field.</em></h2><p>Varia Studio is an independent applied AI and software studio founded by Mahdieh Kazemi. Its work sits at the intersection of soil science, agricultural data, machine learning and software engineering.</p><p>We build focused tools, test assumptions against data, and treat validation as part of the product — not a footnote.</p><a className="text-action" href={linkedin} target="_blank" rel="noreferrer">Meet the founder on LinkedIn <ArrowUpRight size={15}/></a></div></section>;
}

function OtherWork() {
  return <section className="other-work"><div className="section-wrap other-inner"><div><div className="section-kicker">ALSO IN THE STUDIO</div><h2>More questions.<br/><em>Related research.</em></h2></div><div className="other-card"><div className="other-icon"><Layers3/></div><div><span>SOIL INTELLIGENCE</span><h3>Varia Carbon</h3><p>Experimental soil organic carbon estimation using environmental and geospatial predictors.</p><a href="https://varia-carbon.streamlit.app/" target="_blank" rel="noreferrer">Explore the research demo <ArrowUpRight size={14}/></a></div></div><div className="other-card"><div className="other-icon"><Database/></div><div><span>RESEARCH DIRECTION</span><h3>Trait-Bridge</h3><p>An early-stage direction exploring interpretable machine learning for genomic and trait-oriented analysis.</p><span className="muted-note">In development · no performance claims</span></div></div></div></section>;
}

function FAQ() {
  const faqs = [{q:"Is Varia Vision production-ready?",a:"No. It is a benchmarked prototype. We offer a scoped evaluation to understand performance on your imagery before any production or deployment discussion."},{q:"What imagery can I share?",a:"Start by describing your RGB aerial imagery, capture platform, resolution, altitude, crop and geography. We will confirm suitability and a secure transfer method before you send files."},{q:"Does the benchmark guarantee field accuracy?",a:"No. The reported mAP50 and inference timing are internal benchmark figures. They do not establish performance on your fields, sensors or operating conditions."},{q:"How much does an evaluation cost?",a:"The fee depends on image volume, image characteristics and the agreed deliverables. Scope, timeline and price are confirmed before work begins."}];
  return <section className="section-wrap section-block faq-block"><div className="faq-heading"><div className="section-kicker">QUESTIONS, ANSWERED</div><h2>Before we <em>talk.</em></h2></div><div className="faq-list">{faqs.map(f=><details key={f.q}><summary>{f.q}<ChevronDown size={17}/></summary><p>{f.a}</p></details>)}</div></section>;
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="section-wrap contact-panel"><div><div className="section-kicker">06 / START A CONVERSATION</div><h2>Have imagery?<br/><em>Let's evaluate it.</em></h2><p>Tell us what you capture, what you grow and what you need to understand. We’ll start by checking whether a focused evaluation makes sense.</p><a className="button button-primary" href={mailto("Varia Vision — let's discuss your imagery", "Hello Varia Studio,\n\nI'd like to discuss Varia Vision for our aerial imagery.\n\nName / organisation:\nCrop / use case:\nLocation:\nCapture platform and image type:\nWhat we'd like to evaluate:\n")}>Email Varia Studio <Mail size={16}/></a></div><div className="contact-aside"><span>DIRECT CONTACT</span><a href={`mailto:${email}`}>{email}<ArrowUpRight size={15}/></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a><div className="contact-location"><span className="live-dot"/> Independent studio · Working internationally</div></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="section-wrap footer-inner"><Brand/><span>Applied AI for agriculture, built with scientific care.</span><span>© {new Date().getFullYear()} Varia Studio</span><a href="#top">Back to top ↑</a></div></footer>;
}

export default function App() {
  return <><Navbar/><main><Hero/><TrustStrip/><Problem/><Evaluation/><Process/><Evidence/><Studio/><OtherWork/><FAQ/><Contact/></main><Footer/></>;
}
