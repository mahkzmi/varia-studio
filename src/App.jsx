import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Database,
  Globe2, Layers3, Mail, MapPinned, Menu, ScanEye, ShieldCheck,
  Sprout, Workflow, X
} from "lucide-react";
import { useState } from "react";

const email = "mah.kzmi21@gmail.com";
const linkedin = "https://www.linkedin.com/in/mahdieh-kazemi-505bab319/";
const mailto = (subject, body = "") =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Varia Studio home">
      <span className="brand-mark"><span>V</span><i /></span>
      <span className="brand-name">VARIA<span>STUDIO</span></span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Services", "#services"], ["Selected work", "#work"], ["Approach", "#approach"], ["Studio", "#studio"]];
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
        <a className="nav-cta" href="#contact">Discuss a project <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && <div className="mobile-nav">
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Discuss a project <ArrowUpRight size={15}/></a>
      </div>}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> INDEPENDENT ENGINEERING STUDIO <span className="eyebrow-rule" /></div>
        <p className="hero-overline">APPLIED AI · GEOSPATIAL · AGRICULTURE</p>
        <h1>Complex field data.<br/><em>Useful software.</em></h1>
        <p className="hero-lead">Varia Studio helps AgTech and geospatial teams turn agricultural, soil and environmental data into practical software — from computer-vision workflows to spatial data systems and APIs.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Discuss a project <ArrowUpRight size={16}/></a>
          <a className="text-link" href="#work">Explore technical work <ArrowDownRight size={16}/></a>
        </div>
        <div className="hero-meta"><span>Founder-led</span><i /> <span>Project-based</span><i /> <span>Working internationally</span></div>
      </div>
      <div className="hero-visual" aria-label="Varia Studio engineering disciplines">
        <div className="visual-topline"><span>VARIA / ENGINEERING SYSTEMS</span><span>01 — 04</span></div>
        <div className="visual-core">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core-node"><span>V.</span><small>DATA → DECISIONS</small></div>
          <div className="orbit-label label-a"><ScanEye size={15}/> COMPUTER VISION</div>
          <div className="orbit-label label-b"><MapPinned size={15}/> GEOSPATIAL DATA</div>
          <div className="orbit-label label-c"><Database size={15}/> DATA ENGINEERING</div>
          <div className="orbit-label label-d"><Code2 size={15}/> SOFTWARE SYSTEMS</div>
        </div>
        <div className="visual-foot"><span>SOIL SCIENCE IN THE LOOP</span><span>BUILT FOR REAL WORKFLOWS</span></div>
      </div>
      <div className="hero-bottom"><span>FROM RESEARCH TO WORKING SOFTWARE</span><span>VARIA STUDIO <b>© 2026</b></span></div>
    </section>
  );
}

function CapabilityStrip() {
  const items = ["Soil & environmental context", "Applied machine learning", "Geospatial workflows", "Production-minded software"];
  return <section className="capability-strip"><div className="section-wrap capability-inner">
    {items.map((item, i) => <div key={item}><span>0{i+1}</span><p>{item}</p></div>)}
  </div></section>;
}

const services = [
  { icon: <ScanEye/>, number: "01", title: "Computer vision & ML", intro: "Turn image and sensor data into reviewable, testable workflows.", points: ["Model evaluation and error analysis", "Image pipelines and annotation workflows", "Inference APIs and model integration"] },
  { icon: <MapPinned/>, number: "02", title: "Geospatial engineering", intro: "Build reliable systems around spatial and environmental data.", points: ["Raster and vector processing", "Remote-sensing data workflows", "Spatial databases, APIs and maps"] },
  { icon: <Database/>, number: "03", title: "Soil & environmental data", intro: "Connect scientific context, field observations and data products.", points: ["Data ingestion and quality control", "Environmental predictor integration", "Reproducible analysis pipelines"] },
  { icon: <Workflow/>, number: "04", title: "Software delivery", intro: "Move a technical concept into a usable, maintainable application.", points: ["Backend and API development", "Dashboards and decision-support tools", "Technical audits and implementation sprints"] }
];

function Services() {
  return <section className="section-wrap section-block services-block" id="services">
    <div className="section-intro">
      <div><div className="section-kicker">01 / WHAT WE DO</div><h2>Engineering that starts<br/><em>with the real problem.</em></h2></div>
      <p>One focused technical partner for teams that need to make data useful — without hiring an entire specialist team or committing to a black-box solution.</p>
    </div>
    <div className="service-grid">{services.map(s => <article className="service-card" key={s.number}>
      <div className="service-card-top"><span>{s.number}</span><div>{s.icon}</div></div>
      <h3>{s.title}</h3><p className="service-intro">{s.intro}</p>
      <ul>{s.points.map(p => <li key={p}><Check size={14}/>{p}</li>)}</ul>
    </article>)}</div>
    <div className="services-note"><ShieldCheck size={17}/><p>Every engagement is scoped around your data, workflow and acceptance criteria. We do not promise model performance before testing the conditions it will face.</p></div>
  </section>;
}

function Work() {
  return <section className="work-section" id="work"><div className="section-wrap">
    <div className="section-intro work-intro">
      <div><div className="section-kicker">02 / SELECTED TECHNICAL WORK</div><h2>Built, tested<br/><em>and still being questioned.</em></h2></div>
      <p>These are studio-built technical assets, not customer case studies. We distinguish internal benchmarks from independent or field validation — and publish only what the evidence supports.</p>
    </div>
    <div className="work-grid">
      <article className="work-card vision-card">
        <div className="work-visual vision-visual"><div className="scan-grid"/><div className="scan-frame"><span/><span/><span/><span/></div><div className="scan-caption">RGB / AERIAL IMAGERY</div><div className="scan-tag">WEED CLASS · ONNX</div></div>
        <div className="work-content">
          <div className="work-meta"><span>COMPUTER VISION</span><span className="status status-prototype">INTERNAL PROTOTYPE</span></div>
          <h3>Varia Vision</h3>
          <p>An experimental weed-detection workflow for RGB aerial imagery, with a FastAPI inference service and ONNX deployment.</p>
          <div className="work-facts"><span>YOLOv8n</span><span>Single deployed weed class</span><span>Field validation pending</span></div>
          <a className="work-link" href="https://variavision-1.onrender.com/docs" target="_blank" rel="noreferrer">View API documentation <ArrowUpRight size={15}/></a>
        </div>
      </article>
      <article className="work-card carbon-card">
        <div className="work-visual carbon-visual"><div className="carbon-contours"><span/><span/><span/><span/><span/><span/></div><div className="carbon-coordinate">SOC / ENVIRONMENTAL PREDICTORS</div><div className="carbon-cross">+</div></div>
        <div className="work-content">
          <div className="work-meta"><span>SOIL INTELLIGENCE</span><span className="status status-research">RESEARCH PROTOTYPE</span></div>
          <h3>Varia Carbon</h3>
          <p>Research into soil organic carbon concentration estimation using environmental and geospatial predictors.</p>
          <div className="work-facts"><span>Data provenance review</span><span>Validation rebuild required</span></div>
          <span className="work-link work-link-muted">Not offered for MRV or carbon-credit decisions</span>
        </div>
      </article>
    </div>
    <div className="work-integrity"><span className="integrity-mark"><ShieldCheck size={18}/></span><p><strong>Evidence, not theatre.</strong> Varia has not yet published paid customer case studies. We will not invent client results, testimonials or field outcomes to make the portfolio look bigger than it is.</p></div>
  </div></section>;
}

function WhoWeHelp() {
  const audiences = [
    { icon: <Globe2/>, title: "AgTech product teams", text: "Adding an analytics, ML or data capability to an existing product." },
    { icon: <MapPinned/>, title: "Drone & geospatial firms", text: "Turning captured imagery and spatial data into a useful customer deliverable." },
    { icon: <Sprout/>, title: "Soil & environment consultancies", text: "Connecting field data, scientific context and repeatable digital workflows." }
  ];
  return <section className="section-wrap section-block audience-block">
    <div className="section-kicker">03 / WHO WE WORK WITH</div>
    <div className="audience-layout"><h2>For teams with data<br/><em>and a reason to use it.</em></h2>
      <div className="audience-list">{audiences.map(a=><article key={a.title}><div>{a.icon}</div><section><h3>{a.title}</h3><p>{a.text}</p></section><ArrowUpRight size={16}/></article>)}</div>
    </div>
  </section>;
}

function Approach() {
  const steps = [
    ["01", "Understand the workflow", "We start with the operational problem, current process, users and decision that needs to improve."],
    ["02", "Inspect the data", "We assess data quality, access rights, technical constraints and what can realistically be measured."],
    ["03", "Agree a bounded scope", "Deliverables, success criteria, timeline, fee and exclusions are written down before implementation."],
    ["04", "Build, test and hand over", "You receive working outputs, limitations, documentation and a clear recommendation for what comes next."]
  ];
  return <section className="approach-section" id="approach"><div className="section-wrap">
    <div className="section-intro"><div><div className="section-kicker">04 / HOW WE WORK</div><h2>Small enough to start.<br/><em>Clear enough to trust.</em></h2></div><p>No open-ended experiments. No mystery scope. A first engagement should create useful evidence for both sides.</p></div>
    <div className="steps-grid">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><div className="step-line"/><h3>{t}</h3><p>{d}</p></article>)}</div>
  </div></section>;
}

function Studio() {
  return <section className="section-wrap section-block studio-block" id="studio">
    <div className="studio-identity"><div className="studio-monogram">V<span>.</span></div><div className="studio-identity-foot"><span>INDEPENDENT</span><span>FOUNDER-LED</span></div></div>
    <div className="studio-copy"><div className="section-kicker">05 / THE STUDIO</div><h2>Scientific thinking.<br/><em>Engineering discipline.</em></h2>
      <p>Varia Studio is an independent, founder-led applied AI and software studio founded by Mahdieh Kazemi. Its work connects soil science, agricultural data, geospatial workflows, machine learning and backend engineering.</p>
      <p>The studio is intentionally small: senior attention from the first conversation, direct communication with the person building the work, and a clear record of what is known, what is uncertain and what has been delivered.</p>
      <a className="text-link" href={linkedin} target="_blank" rel="noreferrer">Connect with the founder <ArrowUpRight size={15}/></a>
    </div>
  </section>;
}

function FAQ() {
  const items = [
    ["Are you an established agency with a large team?", "No. Varia is a founder-led independent studio. You work directly with the person responsible for the technical delivery. If a project needs additional capacity, that is discussed transparently before scope is agreed."],
    ["Do you have customer case studies?", "Varia has not yet published paid customer case studies. The work shown here is clearly labeled as internal prototype or research work. Customer outcomes will only be published with permission and supporting evidence."],
    ["How do projects get priced?", "We use a scoped project fee based on the problem, data, complexity, deliverables and timeline. If the problem is not yet clear, the first step can be a paid diagnostic rather than an open-ended estimate."],
    ["Can you work with confidential data?", "We first agree the data required, permitted use, access controls, retention and transfer method. Please do not email sensitive datasets or personal information before those arrangements are agreed."],
    ["Do you sell Varia Vision or Varia Carbon as production products?", "Not currently. Vision is an experimental computer-vision prototype; Carbon is a research prototype undergoing evidence review. We do not position either as a validated production or MRV product."]
  ];
  return <section className="section-wrap section-block faq-block"><div><div className="section-kicker">06 / QUESTIONS</div><h2>Clear answers<br/><em>before we begin.</em></h2></div><div className="faq-list">{items.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>;
}

function Contact() {
  const body = "Hello Varia Studio,\n\nI'd like to discuss a project.\n\nOrganisation / role:\nCurrent workflow or problem:\nData available:\nWhat a successful outcome would change:\nTimeline:\n";
  return <section className="contact-section" id="contact"><div className="section-wrap contact-panel">
    <div className="contact-copy"><div className="section-kicker">07 / START A PROJECT</div><h2>Bring us the<br/><em>hard part.</em></h2><p>Tell us what is not working, what data you have and what needs to happen next. We will respond with a practical first step — or tell you honestly if it is not a fit.</p>
      <a className="button button-primary" href={mailto("Project enquiry — Varia Studio", body)}>Discuss a project <Mail size={16}/></a>
    </div>
    <div className="contact-aside"><span>DIRECT CONTACT</span><a href={`mailto:${email}`}>{email}<ArrowUpRight size={15}/></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a><div className="contact-rule"/><p>Independent studio<br/>Remote-first · International projects</p><small>Please do not send confidential files before a secure transfer method is agreed.</small></div>
  </div></section>;
}

function Footer() {
  return <footer className="footer"><div className="section-wrap footer-inner"><Brand/><span>Applied AI & geospatial engineering for agriculture, soil and the environment.</span><span>© {new Date().getFullYear()} Varia Studio</span><a href="#top">Back to top ↑</a></div></footer>;
}

export default function App() {
  return <><Navbar/><main><Hero/><CapabilityStrip/><Services/><Work/><WhoWeHelp/><Approach/><Studio/><FAQ/><Contact/></main><Footer/></>;
}
