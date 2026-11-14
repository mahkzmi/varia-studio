# Varia Studio — Website Repositioning Blueprint
**Internal draft | 14 November 2026**

## Goal
Move the website from “a weed-detection evaluation landing page” to a credible B2B applied AI and geospatial engineering studio. Keep Vision visible as a demonstration, but do not let an experimental model define the whole company.

## Recommended information architecture
1. Home
2. Services
3. Selected Work
4. Technology
5. Studio
6. Contact

For the current Vite single-page build, these can be sections first. Separate routes can follow once there are at least two strong case studies.

## Homepage copy — working draft

### Hero
**Applied AI and geospatial engineering for agriculture, soil and the environment.**

Varia Studio helps AgTech and geospatial teams turn complex field data into usable software — from computer-vision workflows and spatial analytics to data pipelines, APIs and decision-support tools.

Primary CTA: **Discuss a project**  
Secondary CTA: **Explore selected work**

### Services
**Computer vision & model evaluation**
- Image pipeline design and preprocessing
- Model benchmarking and error analysis
- Annotation workflow design
- Inference API integration
- Human-in-the-loop review

**Geospatial data engineering**
- Raster/vector ingestion and processing
- Spatial database and API design
- Environmental data integration
- Reproducible geospatial workflows
- Mapping and analytics interfaces

**Applied AI & software delivery**
- ML workflow integration
- Backend/API development
- Data products and internal dashboards
- Research-to-product engineering
- Technical audits and implementation sprints

Only list services the founder can currently deliver with evidence or clearly mark them as available by scoped engagement.

### Selected work — evidence labels are mandatory
**Varia Vision — agricultural computer vision prototype**  
YOLOv8n-based weed detection in RGB aerial imagery. Internal benchmark mAP50 reported at 0.788; the current deployed model is single-class weed detection. No independent customer-field validation is claimed.  
Label: *Internal prototype · not field validated.*

**Varia Carbon — soil organic carbon research prototype**  
Experimental SOC concentration estimation using environmental predictors. The current public model/data provenance and reported metrics require reconciliation. Do not display numerical performance claims on the marketing homepage until the validation dossier is approved.  
Label: *Research prototype · validation under review.*

**Trait-Bridge — research direction**  
Early exploration of interpretable machine learning for trait-oriented analysis. No product-performance claims.  
Label: *Research direction · not a commercial product.*

### How we work
1. Understand the workflow and decision.
2. Inspect the data, permissions and constraints.
3. Agree a bounded scope, deliverables, success criteria, timeline and fee.
4. Build or evaluate the workflow.
5. Document evidence, limitations and next steps.

### Studio
Varia Studio is an independent applied AI and software studio founded by Mahdieh Kazemi. Its work connects soil science, agricultural data, geospatial workflows, machine learning and backend engineering.

### Contact
**Have a data or engineering workflow to improve?**  
Describe the operational problem, current workflow, available data and what a successful outcome would change. Varia will respond with a scoped next step.

## SEO foundation
Suggested title: Varia Studio | Applied AI & Geospatial Engineering
Suggested description: Applied AI, computer vision, geospatial data engineering and software for agriculture, soil and environmental workflows.
Suggested H1: Applied AI and geospatial engineering for agriculture, soil and the environment.
Suggested topics:
- agricultural computer vision development
- geospatial data engineering for agriculture
- drone imagery analytics
- soil data and environmental ML
- agricultural AI software integration

Do not keyword-stuff. Publish separate service pages only when there is enough unique evidence and content.

## Trust elements to add only when real
- Founder background and relevant qualifications.
- Technical architecture summaries.
- Reproducible demo walkthroughs.
- Dataset provenance and evaluation protocols.
- Customer names/logos only with written permission.
- Testimonials only with approval and exact attribution.
- Case studies with baseline, scope, work performed, result, limitations and customer permission.

## Technical SEO / QA checklist
- One canonical production domain.
- One Vercel project connected to the production branch.
- Confirm public production access and no unintended SSO/password protection.
- Confirm canonical, title, description, Open Graph, favicon, robots and sitemap.
- Add Organization and WebSite JSON-LD; add Service schema only for genuinely offered services.
- Test mobile layout, forms/CTAs, links, accessibility and page speed.
- Add a real Open Graph image.
- Set up Google Search Console and Bing Webmaster Tools.
- Validate sitemap submission and URL inspection.
- Track CTA clicks, qualified inquiries and source attribution without collecting unnecessary personal data.

## Deployment recommendation
Do not merge the current strategy PR into production blindly. Build the new copy/layout in a separate preview branch, test it, then promote only after checking the public production domain. Avoid removing the existing page until the replacement is reviewed.
