// CENTRAL CUSTOMIZATION FILE
// Edit this file to change the brand, copy, links, products, metrics and theme.
export const siteConfig = {
  brand: {
    name: "Varia Studio",
    mark: "V/",
    eyebrow: "INDEPENDENT APPLIED AI STUDIO",
    location: "FROM IRAN · WORKING EVERYWHERE",
    copyright: "© 2026 Varia Studio. Built with intent."
  },
  theme: {
    background: "#090B09",
    panel: "#121612",
    panelRaised: "#171D17",
    text: "#F0F1E9",
    muted: "#A0A79A",
    accent: "#B9CA8B",
    accentStrong: "#D3DDB4",
    line: "rgba(226, 235, 215, .12)"
  },
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Method", href: "#method" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    tag: "AGRICULTURAL COMPUTER VISION · FIELD IMAGE EVALUATION", 
    headlineA: "See the field", 
    headlineB: "with greater", 
    headlineC: "clarity.", 
    description: "Varia Vision is an experimental crop-and-weed detection system for aerial imagery. We work with your field images to assess detection quality, document limitations, and determine whether a focused pilot makes sense.", 
    primaryLabel: "Discuss a Vision evaluation", 
    secondaryLabel: "Explore the approach", 
    note: "SOIL · VISION · DATA"
  },
  intro: {
    index: "01 / THE STUDIO",
    title: "Not AI for its own sake.",
    highlight: "Intelligence with a place in the real world.",
    body: "Varia is an independent applied AI studio working at the intersection of agricultural science and software engineering. We build focused tools where domain knowledge matters as much as the model."
  },
  products: [
    {
      id: "carbon",
      index: "01",
      name: "Varia Carbon",
      discipline: "SOIL INTELLIGENCE",
      status: "LIVE DEMO",
      statusTone: "live",
      short: "Estimate soil organic carbon through environmental and geospatial signals.",
      problem: "Soil carbon is foundational to soil health, yet useful estimates are often difficult to access at scale.",
      approach: "A machine-learning workflow combining environmental predictors and soil-related variables to explore spatial patterns in soil organic carbon.",
      proof: [
        { value: "0.78", label: "R² · reported model result" },
        { value: "0.80%", label: "MAE · SOC" },
        { value: "18.9k", label: "LUCAS records in source dataset" }
      ],
      stack: ["Python", "Scikit-learn", "Geospatial data", "Streamlit"],
      caveat: "Metrics describe the current experimental model and its evaluation setup; they are not a guarantee of field performance.",
      action: "Open live demo",
      href: "https://varia-carbon.streamlit.app/",
      icon: "carbon"
    },
    {
      id: "vision",
      index: "02",
      name: "Varia Vision",
      discipline: "COMPUTER VISION",
      status: "BENCHMARKED PROTOTYPE", 
      statusTone: "pilot",
      short: "Evaluate crop and weed detection on your own aerial field imagery.", 
      problem: "Teams collecting aerial imagery need to know whether automated crop and weed detection is reliable enough for their specific fields and image conditions.", 
      approach: "A bounded evaluation using customer-provided imagery to inspect detections, confidence scores, and failure cases before discussing any wider deployment.", 
      proof: [
        { value: "0.788", label: "mAP50 · internal validation" }, 
        { value: "5.2 ms", label: "Inference · T4 benchmark" }, 
        { value: "YOLOv8n", label: "Model architecture" }
      ],
      stack: ["Python", "YOLO", "Roboflow", "API integration"],
      caveat: "These are internal benchmark results, not independent or field validation. Performance on your imagery must be evaluated separately; no field-accuracy guarantee is implied.", 
      action: "Request an evaluation", 
      href: "mailto:mah.kzmi21@gmail.com?subject=Varia%20Vision%20Image%20Evaluation", 
      icon: "vision"
    },
    {
      id: "trait",
      index: "03",
      name: "Varia Trait-Bridge",
      discipline: "GENOMIC INTELLIGENCE",
      status: "IN DEVELOPMENT",
      statusTone: "build",
      short: "Make genomic screening more interpretable through applied machine learning.",
      problem: "Genomic datasets can be high-dimensional and difficult to translate into transparent screening decisions.",
      approach: "An emerging research direction focused on interpretable ML workflows for genomic signals and trait-oriented analysis.",
      proof: [
        { value: "ML", label: "Core methodology" },
        { value: "Traits", label: "Research focus" },
        { value: "Explainable", label: "Design principle" }
      ],
      stack: ["Machine learning", "Genomic data", "Interpretability"],
      caveat: "This product is in development. No validated performance claims are presented at this stage.",
      action: "Discuss research",
      href: "mailto:mah.kzmi21@gmail.com?subject=Varia%20Trait-Bridge",
      icon: "trait"
    }
  ],
  method: [
    { n: "01", title: "Understand the domain", text: "Start with the scientific and operational context — not with a model looking for a problem." },
    { n: "02", title: "Build the evidence", text: "Work with relevant data, explicit assumptions, and evaluation that makes limitations visible." },
    { n: "03", title: "Engineer the tool", text: "Turn validated workflows into usable software, APIs, and decision-support interfaces." },
    { n: "04", title: "Test in context", text: "Treat deployment and field validation as part of the product, not as an afterthought." }
  ],
  capabilities: ["Soil & environmental intelligence", "Computer vision", "Applied machine learning", "Backend & API engineering", "Geospatial data workflows", "Research-to-product translation"],
  founder: {
    name: "Mahdieh Kazemi",
    role: "FOUNDER · SOIL SCIENCE × SOFTWARE",
    statement: "I work where living systems meet engineered systems.",
    bio: "My background brings together soil science, agricultural data, backend development, and applied machine learning. Varia Studio is the space where I turn that intersection into focused, testable products."
  },
  contact: {
    title: "Have field imagery", 
    titleAccent: " worth evaluating?", 
    description: "Tell us about your drone imagery, crops, geography, and the decision you want to improve. We can scope a paid evaluation before discussing deployment.", 
    email: "mah.kzmi21@gmail.com", 
    linkedin: "https://www.linkedin.com/in/mahdieh-kazemi-505bab319",
    x: "https://x.com/thevaria_studio",
    handle: "@thevaria_studio"
  },
  footer: {
    note: "Small by design. Serious about the work.",
    links: [{ label: "Email", href: "mailto:mah.kzmi21@gmail.com" }, { label: "X", href: "https://x.com/thevaria_studio" }]
  }
};
