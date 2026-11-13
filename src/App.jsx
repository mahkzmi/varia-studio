import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleDot, Cpu, Crosshair, Database, Layers3, Linkedin, Mail, Menu, ScanLine, ShieldCheck, Sprout, X } from "lucide-react";
import { useEffect, useState } from "react";

const email = "mah.kzmi21@gmail.com";
const linkedin = "https://www.linkedin.com/in/mahdieh-kazemi-505bab319/";
const mailto = (subject, body = "") => `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function Brand() {
  return <a className="brand" href="#top" aria-label="Varia Studio home"><span className="brand-symbol">V<span>.</span></span><span>VARIA<span className="brand-light"> STUDIO</span></span></a>;
}

async function prepareImageForInference(file) {
  const bitmap = await createImageBitmap(file);
  try {
    const maxSide = 1600;
    const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) throw new Error("Your browser could not prepare this image.");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.drawImage(bitmap, 0, 0, width, height);
    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((value) => value ? resolve(value) : reject(new Error("Image compression failed.")), "image/jpeg", 0.82);
    });
    const baseName = file.name.replace(/\\.[^.]+$/, "") || "field-image";
    return new File([blob], baseName + ".jpg", { type: "image/jpeg", lastModified: Date.now() });
  } finally {
    bitmap.close();
  }
}

function DetectionPreview() {
  const [previewUrl, setPreviewUrl] = useState("");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [imageSize, setImageSize] = useState(null);
  const [progressMessage, setProgressMessage] = useState("Preparing image…");

  useEffect(() => () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  const onFileChange = async (event) => {
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type || !file.type.startsWith("image/")) {
      setError("Please choose a supported image file.");
      setStatus("error");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("This demo accepts images up to 10 MB.");
      setStatus("error");
      return;
    }

    setPreviewUrl("");
    setImageSize(null);
    setResult(null);
    setError("");
    setStatus("loading");
    setProgressMessage("Preparing image…");

    try {
      const inferenceFile = await prepareImageForInference(file);
      if (inferenceFile.size > 10 * 1024 * 1024) {
        throw new Error("The prepared image is still larger than the 10 MB service limit.");
      }
      setPreviewUrl(URL.createObjectURL(inferenceFile));

      // Render's free instance sleeps after inactivity. Wake it and wait for
      // the model-backed API to become healthy before sending the image.
      setProgressMessage("Waking the inference service…");
      let apiReady = false;
      const wakeDeadline = Date.now() + 90000;
      while (Date.now() < wakeDeadline) {
        try {
          const health = await fetch("https://variavision-1.onrender.com/health", {
            method: "GET",
            cache: "no-store"
          });
          if (health.ok) {
            apiReady = true;
            break;
          }
        } catch (_) {
          // A sleeping Render instance may reset the first connection.
        }
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
      if (!apiReady) {
        throw new Error("The inference service is still starting. Please try again in a minute.");
      }

      setProgressMessage("Running weed detection…");
      const formData = new FormData();
      formData.append("file", inferenceFile);
      const response = await fetch("https://variavision-1.onrender.com/detect", {
        method: "POST",
        body: formData
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.detail || ("The inference request failed (" + response.status + ")."));
      }
      setResult(payload);
      setStatus("done");
    } catch (requestError) {
      setError(requestError.message || "The model could not process this image. Please try again.");
      setStatus("error");
    }
  };

  const detections = result && Array.isArray(result.detections) ? result.detections : [];

  return <div className="vision-demo" aria-label="Live Varia Vision image evaluation demo">
    <div className="preview-top"><span><i className="live-dot" /> VARIA VISION / LIVE INFERENCE</span><span>EXPERIMENTAL</span></div>
    <div className={"vision-demo-stage" + (previewUrl ? " has-image" : "")}>
      {previewUrl ? <>
        <img className="vision-demo-image" src={previewUrl} alt="Selected field imagery" onLoad={(event) => setImageSize({width:event.currentTarget.naturalWidth,height:event.currentTarget.naturalHeight})} />
        {imageSize && status === "done" && <svg className="vision-overlay" viewBox={"0 0 " + imageSize.width + " " + imageSize.height} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Model detection boxes">
          {detections.map((detection,index) => {
            const box = detection.bbox || [0,0,0,0];
            const kind = String(detection.class || "").toLowerCase();
            const stroke = kind.includes("weed") ? "#e3b56f" : kind.includes("crop") ? "#b7ce8b" : "#8fb6df";
            const x = Number(box[0]), y = Number(box[1]), width = Number(box[2]) - x, height = Number(box[3]) - y;
            const label = String(detection.class || "object").toUpperCase() + " " + Math.round((Number(detection.confidence)||0)*100) + "%";
            const fontSize = Math.max(imageSize.width / 90, 12);
            const labelHeight = Math.max(imageSize.height * 0.04, 28);
            const labelWidth = Math.max(imageSize.width * 0.13, label.length * fontSize * 0.65 + 12);
            const labelY = Math.max(0, y - labelHeight);
            return <g key={index}><rect x={x} y={y} width={width} height={height} fill="none" stroke={stroke} strokeWidth={Math.max(imageSize.width / 350, 2)} /><rect x={x} y={labelY} width={labelWidth} height={labelHeight} fill="#080b09" fillOpacity=".9" /><text x={x+6} y={labelY+labelHeight*0.7} fill={stroke} fontSize={fontSize} fontFamily="monospace">{label}</text></g>;
          })}
        </svg>}
      </> : <div className="vision-demo-empty"><ScanLine size={30}/><strong>Your field image goes here</strong><span>Upload an RGB aerial image to request a real model inference</span></div>}
      {status === "loading" && <div className="vision-demo-loading"><span className="demo-spinner"/>{progressMessage}</div>}
    </div>
    <div className="vision-demo-controls">
      <label className="vision-upload-button">{previewUrl ? "Run another image" : "Choose an image"} <ArrowUpRight size={14}/><input type="file" accept="image/*" onChange={onFileChange}/></label>
      <span>JPG · PNG · WEBP · max 10 MB · optimized before upload</span>
    </div>
    {status === "done" && <div className="vision-result">
      <div className="vision-result-head"><strong>MODEL RESPONSE</strong><span>{result.detections_count} detections returned</span></div>
      {detections.length ? <div className="vision-detection-list">{detections.map((detection,index)=><div key={index}><span className={String(detection.class || "").toLowerCase().includes("weed") ? "detection-weed" : "detection-other"}>{String(detection.class || "object").toUpperCase()}</span><strong>{Math.round((Number(detection.confidence)||0)*100)}%</strong></div>)}</div> : <p className="vision-result-note">No detections returned at the current confidence threshold (0.25). This does not establish that weeds or crops are absent.</p>}
    </div>}
    {status === "error" && <p className="vision-error" role="alert">{error}</p>}
    <div className="preview-legend"><span><i className="legend-weed" /> Weed class</span><span className="preview-disclaimer">Prototype · Human review required</span></div>
    <div className="preview-bottom"><span>RGB IMAGE INPUT</span><span>OUTPUT IS NOT FIELD-VALIDATED</span></div>
    <p className="vision-privacy-note">Images are sent to the inference API for processing. Do not upload confidential or sensitive imagery.</p>
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
      <p className="hero-lead">Evaluate weed detection on your own drone imagery — before committing to a larger workflow.</p>
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
    <div className="section-kicker">01 / THE OPPORTUNITY</div><div className="problem-grid"><div><h2>Collecting imagery is one thing.<br/><em>Knowing what it tells you is another.</em></h2></div><div className="problem-copy"><p>Drone service providers and agricultural teams can capture large volumes of field imagery. Turning those images into consistent weed observations is a separate operational challenge.</p><p>Varia Vision is an experimental computer-vision workflow designed to explore that step — with your imagery, your conditions, and the limitations made visible.</p></div></div>
    <div className="feature-grid"><article><Crosshair/><h3>Weed detection</h3><p>Explore object-level detections in RGB aerial imagery.</p></article><article><ScanLine/><h3>Image-level review</h3><p>Inspect outputs and examples rather than relying on a headline score.</p></article><article><ShieldCheck/><h3>Evidence before scale</h3><p>Identify failure cases and fit before discussing integration or deployment.</p></article></div>
  </section>;
}

function Evaluation() {
  const items = ["A review of the supplied imagery and its suitability for evaluation", "Detection outputs on an agreed sample of images", "A concise summary of observed strengths, errors and failure cases", "A technical discussion of next steps, integration needs and open risks"];
  return <section className="evaluation-section" id="evaluation"><div className="section-wrap evaluation-grid">
    <div><div className="section-kicker">02 / A SMALL, DEFINED FIRST STEP</div><h2>Start with an <em>evaluation.</em><br/>Not a leap of faith.</h2><p className="evaluation-lead">A paid, bounded technical evaluation helps both sides decide whether the workflow is useful on the imagery that matters to you.</p><a className="button button-primary" href={mailto("Varia Vision — evaluation scope", "Hello Varia Studio,\n\nI'd like to discuss an evaluation using our aerial imagery.\n\nWeed type / use case:\nLocation:\nImage format / sample size:\nWhat we want to learn:\n")}>Discuss your evaluation <ArrowUpRight size={17}/></a></div>
    <div className="deliverable-card"><div className="deliverable-head"><span>WHAT THE EVALUATION CAN INCLUDE</span><span>01—04</span></div>{items.map((item,i)=><div className="deliverable-row" key={item}><span>0{i+1}</span><p>{item}</p><Check size={16}/></div>)}<div className="deliverable-foot"><span>Scope, timeline and fee</span><strong>Agreed before work starts</strong></div></div>
  </div></section>;
}

function Process() {
  const steps = [{n:"01",title:"Share a sample",text:"Tell us about the weed type, location, capture method and the decision you want to support."},{n:"02",title:"Agree the scope",text:"We review suitability, define the sample size and confirm deliverables, timing and fee."},{n:"03",title:"Evaluate the output",text:"We run the agreed assessment and document what works, what fails and what remains unknown."},{n:"04",title:"Decide with evidence",text:"Review the findings together and decide whether a next-stage pilot is justified."}];
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
  return <section className="contact-section" id="contact"><div className="section-wrap contact-panel"><div><div className="section-kicker">06 / START A CONVERSATION</div><h2>Have imagery?<br/><em>Let's evaluate it.</em></h2><p>Tell us what you capture, what you grow and what you need to understand. We’ll start by checking whether a focused evaluation makes sense.</p><a className="button button-primary" href={mailto("Varia Vision — let's discuss your imagery", "Hello Varia Studio,\n\nI'd like to discuss Varia Vision for our aerial imagery.\n\nName / organisation:\nWeed type / use case:\nLocation:\nCapture platform and image type:\nWhat we'd like to evaluate:\n")}>Email Varia Studio <Mail size={16}/></a></div><div className="contact-aside"><span>DIRECT CONTACT</span><a href={`mailto:${email}`}>{email}<ArrowUpRight size={15}/></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a><div className="contact-location"><span className="live-dot"/> Independent studio · Working internationally</div></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="section-wrap footer-inner"><Brand/><span>Applied AI for agriculture, built with scientific care.</span><span>© {new Date().getFullYear()} Varia Studio</span><a href="#top">Back to top ↑</a></div></footer>;
}

export default function App() {
  return <><Navbar/><main><Hero/><TrustStrip/><Problem/><Evaluation/><Process/><Evidence/><Studio/><OtherWork/><FAQ/><Contact/></main><Footer/></>;
}
