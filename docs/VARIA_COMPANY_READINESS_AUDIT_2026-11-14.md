# Varia Studio — Company Readiness Audit & Strategic Direction
**Phase 0 working dossier | 14 November 2026**  
**Status:** Internal strategy document. No customer, investor, scientific, or revenue claims in this document should be republished without evidence review.

---

## 1. Executive decision

### Recommended company model
Position Varia Studio as an **Applied AI & Geospatial Engineering Studio for Agriculture, Soil and Environmental Data**.

Use a **service-led, product-supported hybrid**:
- **Near-term revenue:** scoped B2B engineering engagements that solve a specific operational/data problem for AgTech, drone/geospatial and agronomy companies.
- **Reusable IP:** Varia Vision and Varia Carbon remain demonstrators / internal technology assets until their data provenance, independent validation and repeatable buyer demand are demonstrated.
- **Long-term scale:** productize the repeated workflow that customers actually pay for. Do not build more products based on founder intuition alone.

This is a working strategic hypothesis, not yet a validated market conclusion. Validate it with paid discovery and customer evidence.

### Why this is the best current risk-adjusted path
1. The studio already has demonstrated software execution: a deployed FastAPI/ONNX inference service, a public Carbon prototype, and a working React/Vite website.
2. The current products do not yet support strong standalone SaaS claims: Vision is a single-class prototype without customer-field validation; Carbon has a serious mismatch between public claims and the model/data path found in the public repository.
3. A services-first offer can sell engineering capacity and domain-specific problem solving without pretending that a prototype is a fully validated product.
4. The service work can produce customer datasets, workflow knowledge, case studies and recurring problems that later justify productization.
5. Raising institutional capital before repeatable demand, defensible data, validation and revenue would likely be a low-probability, high-distraction route.

**Strategic allocation hypothesis for the next 60 days:** 70% customer discovery, sales and delivery; 20% evidence/portfolio and company credibility; 10% product maintenance. No new product development unless directly tied to a paid engagement or a critical validation gap.

---

## 2. Company baseline — evidence reviewed

### Assets observed
- Public website repository: `mahkzmi/varia-studio`, React 18 + Vite 6 + Tailwind 3, deployed to Vercel.
- Current public website is a one-page page focused almost entirely on Varia Vision and a paid aerial-imagery evaluation.
- Public website includes the founder profile, email contact, Vision API documentation link, Carbon demo link and a Trait-Bridge research-direction card.
- Public Carbon repository: `mahkzmi/varia-carbon`; contains `api.py`, `train_real_model.py`, `test_model.py`, `real_soil_data_70.csv`, `carbon_model_real_70.pkl`, README, dashboard and technical documents.
- Varia Vision is deployed as a FastAPI/ONNX inference API (known endpoint: `https://variavision-1.onrender.com/docs`).
- Current CRM/outreach includes multiple cold emails to drone and agricultural service providers, including CAGE Malawi and iDrone Services Zambia on 14 November 2026.
- Email evidence includes a LinkedIn message digest from Afusuy Papy dated 5 November 2026 and a LinkedIn digest showing messages from Maharshi Patel and md Khaja on 10 November 2026. These are real conversations to inspect, not proof of commercial intent or a paid opportunity.
- Existing company narrative emphasizes “From Iran · For the World”. Keep this as an origin statement only if it does not create avoidable procurement, payment or compliance friction in the target market.

### What is not established
- No verified recurring revenue, paid Varia customer contract, renewal, or product usage baseline was established in this review.
- No independently audited customer case study or customer reference was established.
- No defensible market-size model, unit economics, sales conversion baseline or validated pricing model was established.
- No complete investor data room or verified cap table/IP ownership file was reviewed.
- No evidence yet that Trait-Bridge is a sellable product or has a defined buyer.
- No independently validated Carbon performance report or traceable sample-level data provenance was established.

These are evidence gaps, not judgments about the founder’s capability.

---

## 3. Benchmark: what successful companies actually sell

The benchmark is not “copy their website”. The useful comparison is how they connect a technical capability to a buyer, an economic problem, proof, and a sales motion.

| Company | Buyer / user | Paid problem | Proof pattern | What Varia should learn |
|---|---|---|---|---|
| **Seqana** | Agrifood corporations and carbon project developers | Soil organic carbon measurement, MRV strategy, sampling design and supply-chain resilience | Project scale, geography, customer references, methodology guidance and expert-led sales | A buyer purchases confidence in a decision and a methodology, not an isolated SOC prediction. Build traceability and evidence before selling MRV. |
| **Perennial** | Sustainability teams and carbon project developers | Field-level MMRV, reduce sampling cost/uncertainty, portfolio-level measurement | Registry/standard alignment, Verra-approved digital soil mapping tool VT0014, workflow coverage | Trust is a product feature. Validation, sampling design, standards and repeatable workflow are part of the commercial product. |
| **Regrow** | CPG/retail, agribusiness, public sector, project developers | Supply-chain resilience, regenerative practice adoption, emissions measurement/reporting | Named enterprise case studies, operational scale, program outcomes and audit evidence | Sell a measurable business outcome embedded in an existing workflow; use named case studies and partner channels. |
| **Niqo Robotics** | Farmers, equipment partners and agricultural distributors | Targeted spraying/thinning, labor/time/chemical efficiency | Real-farm deployments, grower testimonials, shipped equipment, partner ecosystem | AI becomes budget-worthy when it changes an operational action and has credible field proof. |

### Benchmark conclusions
1. **They sell outcomes and risk reduction, not model metrics.**
2. **They choose a clear economic buyer.** “Agriculture companies” is too broad.
3. **They prove the workflow in context.** The evidence stack includes data provenance, field/customer deployments, independent validation, methodology and testimonials.
4. **They show customers and use cases.** Varia currently shows technical capability more prominently than business impact.
5. **They build a repeatable delivery motion.** Their products are part of a system of services, data, integrations, reporting and partnerships.

### Primary references
- Seqana: https://www.seqana.com/  
  Homepage describes validated, satellite-based soil-health/SOC measurement, agrifood and carbon-project-developer solutions, global project scale, methodology resources and a €3.2M round announcement.
- Perennial: https://www.perennial.earth/  
  Homepage describes MMRV, reducing sampling cost/uncertainty, registry alignment, sustainability and carbon-market buyers, and VT0014.
- Regrow: https://www.regrow.ag/  
  Homepage presents named case studies including Kellanova, General Mills, Cargill, Oatly and Scoular, and buyer-specific workflows across agribusiness, CPG, public sector and project developers.
- Niqo Robotics: https://www.niqorobotics.com/  
  Homepage focuses on AI-powered spot spraying/thinning, field operations, farmer ROI, equipment partners and real-farm proof.

---

## 4. Product audit — current commercial status

### 4.1 Varia Vision
**Current status:** benchmarked prototype / technical demonstrator. Not yet a production-ready field product.

Evidence already available from the founder’s technical work:
- YOLOv8n-based weed detection.
- Internal validation mAP50 reported as 0.788 (weed class 0.802; crop class 0.773 in earlier experiment notes).
- T4 benchmark inference time reported as 5.2 ms.
- Current deployed ONNX model has only one class: `weed`.
- API is FastAPI + ONNX Runtime; known endpoints include `/health` and `/detect`.
- No independent validation on a paying customer’s imagery has been established.
- Known operational constraints include upload-size and image-pixel limits, resize/preprocessing behavior, a global inference lock, no API-key/authentication layer, an in-memory usage counter, and a free Render service with no production SLA.

**Commercial implications**
- Do not claim species-level weed recognition, crop-vs-weed multiclass output, multispectral support, guaranteed field accuracy, yield gains or chemical savings.
- Do not call it production-ready or field-validated.
- Do not sell the API as a dependable production dependency until authentication, usage controls, persistence/observability, concurrency, SLA, data handling and deployment costs are addressed.
- A scoped evaluation can be offered only when the buyer has a defined use case, appropriate RGB images, a decision they want to improve, and acceptance that it is an evaluation rather than a guaranteed result.

**Better offer hypothesis**
“Applied computer-vision evaluation and integration for agricultural aerial imagery” — a scoped service that can include imagery suitability review, inference benchmark, annotation/error analysis, data pipeline/API integration and a technical recommendation. Price based on volume, complexity, data rights, deliverables and timeline. Do not default to the same $500/50-image offer for every prospect.

### 4.2 Varia Carbon
**Current status:** research prototype with critical evidence and claims debt. Not suitable for MRV, carbon-credit issuance, or high-stakes soil decisions in its current documented form.

Repository observations:
- README claims R² ≈ 0.78, MAE 0.80% SOC, RMSE 1.02% SOC, 5-fold CV R² ≈ 0.827 and EU LUCAS validation.
- The public training script reads `real_soil_data_70.csv`, which contains 70 rows and six columns: NDVI, precipitation, temperature, elevation, clay and SOC.
- The 70-row file contains smooth, strongly patterned sequences. It has no sample identifiers, coordinates, lab IDs, dates, location, source metadata or provenance fields in the file itself.
- The public training script uses a random 80/20 train/test split with random_state 42, then calculates five-fold CV on the full dataset.
- `api.py` loads `carbon_model_real_70.pkl` and accepts five predictors. It returns only `predicted_soc_percent`.
- The README describes a result in seconds and MRV/cost reduction, but the public code and dataset do not establish those broader claims.
- The public Streamlit app describes “carbon credit potential” by multiplying SOC% by 0.5 and displays “tons CO₂ equivalent per hectare”. That calculation is not scientifically sufficient to derive soil carbon stock or carbon credits.

**Critical correction**
SOC concentration (%) is not itself SOC stock (t C/ha), and cannot be converted to credits by multiplying by 0.5. Stock estimation requires at minimum soil depth, bulk density, coarse-fragment correction and area, plus a baseline/change methodology and uncertainty accounting. Carbon-credit issuance requires additional protocol, additionality, monitoring, permanence, leakage and verification requirements.

**Immediate risk controls**
- Remove or quarantine “EU validated”, “MRV-ready”, “90% lower cost”, “10,000+ hectares”, and carbon-credit quantity claims unless independently evidenced.
- Do not use the current demo for credit issuance, investment claims or paid agronomic decisions.
- Preserve the separate LUCAS-based development track as research; document exact dataset version, target transformation, spatial/temporal split, data leakage checks, geographic scope and independent validation before merging or redeploying it.
- Replace current demo messaging with “experimental SOC concentration estimation research prototype” until the evidence supports more.

### 4.3 Trait-Bridge
**Current status:** early research direction; no validated product, performance evidence, clear buyer, or defined paid workflow established.

**Decision:** park commercial promotion and new development. Reopen only when a buyer problem, dataset rights, intended use, validation protocol and paid pilot are identified.

---

## 5. Website audit

### Current strengths
- Coherent dark forest-green visual system and clear visual hierarchy.
- Founder and contact are visible.
- Current copy is more careful than earlier marketing: Vision is called experimental; limitations and lack of field validation are stated.
- Current Vision offer includes a bounded evaluation and an explicit workflow.
- SEO metadata, canonical URL, JSON-LD Organization/WebSite/Service, robots.txt and sitemap.xml exist in the repository.

### Material weaknesses
1. The live page positions Varia almost entirely around a weed-detection evaluation. It does not establish the broader Applied AI & Geospatial Engineering studio proposition.
2. Carbon and Trait-Bridge are not meaningfully represented on the current live page, despite appearing in the company portfolio.
3. There are no genuine case studies, named customers, quantified business outcomes, delivery examples, client logos or testimonials.
4. The primary CTA asks the prospect to provide data and engage in a paid evaluation. It does not show enough of the wider services Varia can deliver.
5. The website does not clearly explain the service capabilities a buyer can procure: geospatial data pipelines, computer-vision integration, model evaluation, backend/API development, analytics dashboards and research-to-software delivery.
6. The domain/project setup is duplicated: two Vercel projects named `varia-studio` and `variastudio` are linked to the same Git repository. This creates operational ambiguity. The project `variastudio` owns `variastudio.vercel.app`; the other project owns `varia-studio-two.vercel.app`. The public URL used in outbound is `variastudio.vercel.app`.
7. The project is on the Vercel Hobby plan. Treat preview/deployment configuration and service reliability as limited; do not imply enterprise hosting or uptime guarantees.
8. The current repository README describes a previous site structure and points to `src/data/siteConfig.js`, while the deployed site is implemented in `src/App.jsx`. This documentation drift should be corrected.
9. The sitemap contains only the homepage. This is acceptable for a one-page site, but the company needs separate pages once service pages, product evidence and case studies exist.

### Recommended site architecture
- Home — Applied AI & Geospatial Engineering for Agriculture, Soil & Environment
- Services — Computer vision, geospatial analytics, data pipelines, backend/API integration, decision-support software
- Work — verified demonstrations and case studies, each labeled by evidence status
- Technology — Vision/Carbon research with model limitations and validation status
- Studio — founder, domain expertise, delivery approach, ownership and contact
- Insights — technical notes and reproducible research summaries (only when there is substance)

### Homepage positioning draft
**Headline:** Applied AI and geospatial engineering for agriculture and soil.  
**Subhead:** Varia Studio helps AgTech and geospatial teams turn complex field data into usable software — from computer-vision workflows and spatial analytics to data pipelines, APIs and decision-support tools.  
**CTA 1:** Discuss a project  
**CTA 2:** Explore selected work

This positioning does not claim field validation, carbon-credit capability or production maturity.

---

## 6. Ideal customer profile and market entry

### Primary ICP — first 60 days
**AgTech, drone-data and geospatial service companies** that:
- already sell aerial imagery, agronomy, remote sensing, GIS or agricultural analytics;
- have customer projects but lack a specialized ML/backend/geospatial engineering team;
- need to add an analytics layer, automate image/data processing, build an API/dashboard, or evaluate a model;
- have an existing paying customer or funded project that creates urgency;
- can procure a defined external engineering engagement.

**Economic buyers:** founder/CEO, CTO, Head of Product, Head of Geospatial, Head of Data/AI, Delivery Director or Innovation Lead.

### Secondary ICP
- Agronomy and crop-consulting firms with recurring data/reporting work.
- Agricultural technology vendors needing integration or data engineering.
- Environmental/soil consultancies with GIS and monitoring workflows.

### Deprioritize initially
- Individual farms without a funded digital project.
- Large enterprises where procurement requires lengthy vendor onboarding and certifications Varia does not yet have.
- Carbon project developers seeking registry-grade MRV from the current Carbon prototype.
- Prospects who only want a free proof-of-concept or expect Varia to validate its model using their data at no cost.
- Generic drone operators with no agriculture/soil use case, no analytics product and no budget signal.

### Qualification score (0–5 each; 25 total)
1. **Problem evidence:** named, current workflow problem.
2. **Urgency:** active project, deadline, customer commitment or operational pain.
3. **Budget evidence:** funded work, procurement signal, paid vendors or explicit budget.
4. **Decision access:** direct path to buyer or technical decision-maker.
5. **Delivery fit:** can be delivered with current capability in 2–6 weeks.

Only pursue accounts scoring **18+** for bespoke outbound. Score 13–17 for research/nurture; below 13 do not send a sales email. These thresholds are operating rules to test, not industry benchmarks.

### Account research template
For each target account, record:
- Company and country; website; source date.
- What it sells and to whom.
- Current agricultural/geospatial products and services.
- Relevant customer case studies and current projects.
- Technology/workflow gap that Varia can plausibly fill.
- Specific buying trigger or project evidence.
- Economic buyer and technical champion.
- Budget signal and procurement constraints.
- Varia offer mapped to the gap.
- Evidence that supports the proposed value.
- Risks/unknowns and qualification score.
- Next action and stop condition.

---

## 7. Commercial offer architecture

Do not sell “AI” in the abstract. Sell a scoped deliverable tied to an operational workflow.

### Offer A — Applied AI / Geospatial Technical Sprint
For AgTech and geospatial firms with an existing project.
Potential deliverables:
- data and workflow audit;
- geospatial processing or data pipeline;
- computer-vision/model benchmark;
- API or backend integration;
- dashboard/reporting interface;
- handover documentation and technical recommendations.

**Commercial model:** fixed-scope milestone engagement. Quote only after a short discovery and written scope. Use a paid discovery phase if requirements/data are unclear.

### Offer B — Computer Vision Workflow Evaluation
For drone service providers or agricultural analytics companies.
Deliverables can include:
- image suitability assessment;
- agreed benchmark sample and metrics;
- annotated outputs and error analysis;
- class/coverage limitations;
- integration feasibility and next-stage plan.

**Important:** no guarantee of field performance; the evaluation must define imagery rights, sample characteristics, annotation standard, success criteria, data handling, fee and timeline before work begins.

### Offer C — Geospatial / Soil Data Engineering
For soil/environmental consultancies and AgTech data teams.
Possible work:
- geospatial data ingestion/cleaning;
- raster/vector processing;
- environmental predictor pipelines;
- spatial database/API;
- mapping/dashboard workflow;
- model integration and reproducibility documentation.

Do not sell Carbon as MRV or credit issuance until its scientific evidence is rebuilt.

### Pricing policy
- Stop sending one identical $500 offer to every prospect.
- Use a minimum engagement floor only after calculating delivery time, infrastructure, revisions, data preparation and payment costs.
- Quote three tiers only when the deliverables are genuinely distinct: diagnostic, implementation sprint, and integration/retainer.
- Ask for an upfront milestone/payment before work begins; define acceptance criteria and change requests.
- Price in USD or another contractually workable currency only after confirming lawful, reliable payment and invoicing route.

---

## 8. Sales system — replace volume with qualification

### Current outbound diagnosis
Recent outreach has targeted multiple countries and a broad set of drone providers. Messages are personalized and transparently describe Vision’s limitations, but many prospects are asked to supply imagery and participate in validating a prototype. That creates effort for the buyer before Varia has established a business case.

The immediate failure is not simply “bad copy”. The campaign has not yet proven that the selected companies have an urgent paid problem, the right buyer, a budget, and a workflow that Varia can improve.

### New operating rules
- Pause broad cold-email volume for 7 days while the ICP and offer are rebuilt.
- Do not send another follow-up to GEOMAP solely to chase the stalled $500 SOW. Reopen only if a new, useful reason appears or the prospect responds.
- Do not count messages sent in the last 48 hours as failed. Track delivery, reply, positive reply, meeting, qualified opportunity, proposal, contract and collected cash separately.
- No prospect gets an email without a short account brief and qualification score.
- No more than 5 carefully researched first-touch accounts per working day until conversion evidence exists.
- Every outreach must reference a concrete workflow, customer/project or business gap and offer a deliverable that does not require the prospect to do Varia’s validation work for free.
- Stop after two unanswered, value-adding contacts unless the prospect shows new engagement. Avoid repeated “just checking in” messages.

### Funnel metrics
Track weekly:
- researched accounts;
- qualified accounts (score ≥18);
- first contacts;
- positive replies;
- discovery calls;
- qualified opportunities;
- proposals;
- signed contracts;
- cash collected;
- average sales-cycle duration;
- reason lost / no decision.

The main success metric is **qualified paid opportunities and cash collected**, not email count.

---

## 9. Investor readiness — honest assessment

### Current position
Varia is not yet demonstrably investor-ready for a conventional institutional round. The key gaps are not design polish; they are traction, repeatability, defensible data/IP, scientific credibility, market evidence, unit economics and a focused product wedge.

### What would make a credible pre-seed story
1. A narrow and urgent buyer problem.
2. A repeatable paid workflow with 3–5 customers or design partners.
3. At least 2–3 customer references/case studies with permission.
4. Clear evidence of willingness to pay and a sales cycle.
5. One repeatable productized capability emerging from service delivery.
6. Reproducible technical validation and data provenance.
7. IP assignment/ownership documentation and a clean repository/licensing review.
8. A clear plan for lawful contracting, invoicing, payments, tax and data protection across target jurisdictions.
9. A credible financial model showing gross margin, delivery capacity, acquisition cost assumptions and runway.

### Fundraising recommendation
Do not make “raise investment” the primary 30-day KPI. First build evidence of paid demand and a repeatable delivery model. Pursue grants, accelerators, strategic partners or angels only when the program fits geography, founder eligibility, legal structure and current traction. Do not misrepresent location, entity, customer status or model validation to improve eligibility.

### Data room checklist
- Company one-pager and deck.
- Founder CV and relevant credentials.
- Product/technical dossiers.
- Customer contracts, SOWs, invoices and proof of collected revenue.
- Customer permissions for references and case studies.
- Financial model and cash-flow forecast.
- Market/ICP research and competitor matrix.
- Product roadmap and validation plan.
- Architecture, security and data-handling documentation.
- IP ownership/assignment, licenses and third-party dependency register.
- Legal entity, contracting and payment-route documentation.
- Risk register and mitigation status.

---

## 10. Risk register

| Risk | Severity | Likelihood | Early warning | Mitigation |
|---|---|---|---|---|
| Carbon performance/provenance claims are overstated | Critical | High | Model/data source cannot be traced or reproduced | Suspend MRV/credit claims; rebuild validation dossier; independent review |
| Vision is sold as production-ready | High | Medium | Buyer expects field accuracy, SLA or species-level classification | Label prototype; define evaluation scope; harden API before production |
| Broad outbound produces no commercial signal | High | High | Low positive reply rate and no discovery calls | Narrow ICP, qualify accounts, sell workflow outcome and stop weak segments |
| Services work consumes all founder capacity | High | Medium | Every project becomes bespoke; no reuse | Standardize sprint, templates, delivery checklist and scope boundaries |
| No reliable international payment/contracting path | Critical | Medium/High | Buyer cannot pay or contract compliantly | Verify lawful route before proposal; obtain professional advice; no misrepresentation |
| Data rights/privacy unclear | High | Medium | Customer imagery lacks permission or transfer controls | Written data rights, retention/deletion policy, secure transfer and access controls |
| Product and brand sprawl | Medium | High | Three products marketed with no common buyer | One company positioning; one primary commercial wedge; park Trait-Bridge |
| Founder dependency / single-person delivery | High | High | Deadlines, sales and delivery compete | Limit concurrent engagements; document delivery; use vetted subcontractors only after margin supports |
| Vercel project/domain duplication | Medium | Medium | Conflicting deployments and unclear canonical ownership | Select one production project, archive/disable duplicate only after routing verification |
| Public case-study credibility gap | High | High | Website relies on metrics without named outcomes | Build transparent demo case studies from reproducible public/open datasets; label non-customer work accurately |
| Security/availability gaps in Vision API | High | Medium | No auth, weak usage controls, free hosting | Add API keys, rate limits, persistent logs, secrets policy, deployment monitoring and paid infrastructure |
| Founder attention spread across projects | High | High | New build work displaces sales and delivery | 60-day focus allocation; weekly stop/start review; no new product without paid signal |

Likelihoods are qualitative working estimates, not statistical probabilities.

---

## 11. 30-day execution sequence

### Days 1–3: control and focus
- Freeze new product features.
- Establish one canonical Vercel production project/domain.
- Update company narrative and service offer.
- Pause unqualified outbound.
- Reconcile current outreach, conversations, responses and next actions.

### Days 4–7: evidence pack
- Vision technical dossier: architecture, exact model classes, benchmark method, limitations, API constraints and test protocol.
- Carbon claims audit: provenance, dataset version, split strategy, target definition, leakage checks and carbon-stock/credit disclaimer.
- Create two clearly labeled technical demonstration case studies using permitted public/open data; never imply they are paid customer deployments.
- Define one reusable technical sprint scope and SOW template.

### Days 8–14: market validation
- Build a list of 30 accounts in one or two adjacent segments.
- Research/score each account; shortlist top 10.
- Conduct 5–8 problem interviews or qualified conversations.
- Test offer wording and price only with real buyers.
- Record objections and buyer language.

### Days 15–21: proposals and delivery
- Send proposals only to qualified opportunities.
- Deliver one paid sprint if secured.
- Capture baseline, outputs, acceptance, customer quote and measurable outcome with permission.
- Turn repeated work into a reusable module.

### Days 22–30: credibility and investor materials
- Publish updated site and verified case studies.
- Prepare one-pager, deck, financial model and data room skeleton.
- Review whether a product wedge has emerged from paid work.
- Decide whether to continue services-led, partner-led or product-led based on evidence.

### 30-day target
Primary: 1–2 paid B2B engagements and documented buyer evidence.  
Stretch: one recurring or follow-on engagement.  
Not guaranteed: $1,000 revenue or an investment round. These are targets, not forecasts.

---

## 12. Immediate decisions already made in this audit

1. **Company positioning:** Applied AI & Geospatial Engineering Studio for Agriculture, Soil and Environmental Data.
2. **Commercial model:** service-led hybrid; products are proof assets until validated.
3. **Primary ICP:** AgTech / drone-data / geospatial companies with existing customer projects and engineering gaps.
4. **Vision:** experimental computer-vision evaluation and integration, not production SaaS yet.
5. **Carbon:** research prototype; remove MRV/carbon-credit claims until scientific and methodological validation.
6. **Trait-Bridge:** parked.
7. **Sales:** stop broad, unqualified outreach; account briefs and qualification before contact.
8. **Fundraising:** build traction and diligence evidence before a conventional raise.
9. **Website:** rebuild around services and verified work, not a single experimental product.
10. **No external communications have been sent as part of this audit. No production website content has been changed.**

---

## 13. Items requiring further technical/legal verification
- Render service inventory and operational settings: workspace selection is required by the Render connector; no service settings were changed during this phase.
- Current Vision ONNX artifact metadata, model input/output tensor shapes, checksum, preprocessing parity and independent test protocol.
- Carbon model artifact inspection and independent reproducibility from source data.
- Google Search Console ownership/indexing state and canonical domain behavior.
- Vercel duplicate project cleanup and final domain/redirect design.
- Contracting, invoicing, tax, sanctions/export controls, data protection and payment eligibility for the founder’s actual legal/operating structure. These require professional/legal verification; do not infer them from IP location.

**End of Phase 0 working dossier.**
