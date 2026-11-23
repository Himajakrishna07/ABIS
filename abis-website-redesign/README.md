# Akshaya Business IT Solutions (ABIS) — Enterprise Corporate Website

A complete, production-grade corporate website transformation for **Akshaya Business IT Solutions (ABIS)** — a premier international IT consulting, staffing, and technology solutions enterprise with over two decades of verified industry excellence across India and the United States.

---

## 1. Executive Summary & Brand Positioning

Akshaya Business IT Solutions (ABIS) operates as an **Extended Strategic Partner** to Fortune 500 multinationals, captive engineering units, R&D centers, and high-growth technology enterprises. This complete redesign transforms ABIS's digital footprint from a legacy presence into a contemporary, authoritative consulting showcase on par with international tier-1 firms (such as Accenture, Globant, and EPAM) while preserving strict fidelity to verified company facts and brand recognition.

### Verified Corporate Information
- **Official Identity:** Akshaya Business IT Solutions (ABIS)
- **Official Logo:** Preserved vector SVG emblem (`public/brand/Akshaya_blue-1.svg`) and white high-contrast variant (`public/brand/Akshaya_white.png`)
- **Experience:** 20+ Years in IT Consulting, Staffing, and Workforce Solutions
- **Global Footprint:**
  - **Registered & Corporate Headquarters (Hyderabad):** 8th Floor, Tower 01, Vasavi Sky City, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032
  - **Branch Office (Bengaluru):** Vayuhu, 25 Kalpana Chawla Road, Sanjayanagara, Bengaluru, Karnataka 560094
  - **USA Operations (New Jersey):** 51 Cragwood Rd #301, South Plainfield, NJ 07080, USA
- **Contact:** `040-48546345` | `hr@akshayaitsolutions.com`
- **Official Vision:** *"To be a Leader in IT Consulting & Staffing and a Trusted Partner to our clients."*
- **Official Mission:** *"To help Clients get the best Talent in the industry and help them become better organizations."*

---

## 2. Technology Stack & Architectural Decisions

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, React Server Components + Client Islands)
- **Language:** TypeScript 5.6 (Strict Type Safety across all models and props)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom midnight navy and corporate blue brand palette
- **Icons:** [Lucide React](https://lucide.dev/) (Tree-shaken, accessible SVGs)
- **Animation:** Lightweight CSS Keyframe Marquees & Framer Motion transitions (Optimized for 60fps and `prefers-reduced-motion`)
- **Validation:** [Zod 3.23](https://zod.dev/) for server & client input validation
- **Image Optimization:** Next.js Image component with zero distortion, responsive srcSets, and local asset caching
- **Performance:** 99.2 kB First Load JS; 21/21 statically generated pages

---

## 3. Complete 13-Page Architecture

| # | Page Route | Purpose & Content |
|---|------------|-------------------|
| 01 | `/` | **Homepage:** Hero with abstract digital mesh, credibility bar, executive about teaser, 6-service grid, 16+ industry ecosystem, why choose ABIS, 24 verified client logo marquee, authentic life at ABIS culture mosaic, and final CTA. |
| 02 | `/who-we-are` | **Corporate Profile:** Dual-decade heritage narrative, official Vision & Mission statements, client partnership philosophy, and extended arm model. |
| 03 | `/services` | **Solutions Directory:** Comprehensive catalog of all 6 consulting practices, engagement comparison matrix (time-to-deploy, suitability), and client advisory FAQ. |
| 04 | `/services/permanent-recruitment` | **Permanent Recruitment:** Sourcing precision, RPC friction elimination, 4-stage delivery methodology, and high offer-to-joining ratios. |
| 05 | `/services/contract-staffing` | **Contract Staffing:** Agile 48-72 hour technical workforce deployment, compliance & payroll governance, and contract-to-hire (C2H) flexibility. |
| 06 | `/services/executive-search-rpo` | **Executive Search & RPO:** Confidential C-suite headhunting, scalable outsourced hiring pipelines, and talent analytics. |
| 07 | `/services/corporate-training` | **Corporate Training:** Workforce upskilling, emerging technology bootcamps, capstone labs, and engineering leadership transformation. |
| 08 | `/services/hr-services` | **HR Services & Advisory:** Organizational development (OD), OKR/KPI appraisal design, POSH & compliance governance, and executive mentoring. |
| 09 | `/services/application-development` | **Application Development & Support:** Full-lifecycle software engineering, systems integration, and SLA-governed L2/L3 support. |
| 10 | `/business-practices` | **Professional Standards:** Client engagement principles, Recruitment Process Cycle (RPC) governance, candidate integrity, and confidentiality NDAs. |
| 11 | `/life-at-abis` | **Life at ABIS:** Employer of choice culture, authentic office photography gallery, meritocracy, and learning opportunities. |
| 12 | `/careers` | **Careers Portal:** Active openings across technical recruitment and enterprise sales, live keyword & department filtering, and resume upload application modal. |
| 13 | `/contact` | **Contact & Global Presence:** Interactive requirement inquiry form, separate career application pathway, and verified physical addresses with maps. |

---

## 4. Directory Structure

```
├── app/
│   ├── api/
│   │   ├── careers/route.ts          # Zod-validated candidate application endpoint
│   │   └── contact/route.ts          # Zod-validated enterprise contact endpoint
│   ├── business-practices/page.tsx   # Professional standards & RPC governance
│   ├── careers/page.tsx              # Careers portal & job listings
│   ├── contact/page.tsx              # Business enquiry & office locations
│   ├── life-at-abis/page.tsx         # Authentic office photo gallery & culture
│   ├── services/
│   │   ├── application-development/  # Dedicated Application Development page
│   │   ├── contract-staffing/        # Dedicated Contract Staffing page
│   │   ├── corporate-training/       # Dedicated Corporate Training page
│   │   ├── executive-search-rpo/     # Dedicated Executive Search & RPO page
│   │   ├── hr-services/              # Dedicated HR Advisory page
│   │   ├── permanent-recruitment/    # Dedicated Permanent Recruitment page
│   │   └── page.tsx                  # Services directory & comparison matrix
│   ├── who-we-are/page.tsx           # Corporate profile, Vision & Mission
│   ├── globals.css                   # Tailwind base, dark palette, custom scrollbars
│   ├── icon.svg                      # Official ABIS sunburst favicon
│   ├── layout.tsx                    # Root HTML layout, SEO metadata, Navbar & Footer
│   ├── not-found.tsx                 # Custom branded 404 page
│   ├── page.tsx                      # Master Homepage
│   ├── robots.ts                     # Search engine crawler configuration
│   └── sitemap.ts                    # Dynamic XML sitemap generator
├── components/
│   ├── AboutTeaser.tsx               # Homepage about narrative & vision/mission
│   ├── BackToTop.tsx                 # Smooth scroll-to-top floating control
│   ├── CareerPortal.tsx              # Job filter, role details & resume upload modal
│   ├── ClientLogoCarousel.tsx        # Dual-track infinite marquee of 24 client logos
│   ├── ContactForm.tsx               # Live client-side validated enquiry form
│   ├── CredibilityBar.tsx            # 20+ years, dual-continent credibility strip
│   ├── CtaBanner.tsx                 # Reusable high-impact call-to-action banner
│   ├── Footer.tsx                    # Multi-column footer with official office details
│   ├── HeroSection.tsx               # Enterprise hero with interactive capability mesh
│   ├── IndustryEcosystem.tsx         # 16-vertical domain ecosystem grid
│   ├── LifeTeaser.tsx                # Homepage authentic office photography mosaic
│   ├── Logo.tsx                      # Responsive official logo renderer
│   ├── Navbar.tsx                    # Sticky header with services dropdown & mobile drawer
│   ├── PageHeader.tsx                # Reusable breadcrumbed subpage hero
│   ├── ServiceDetailTemplate.tsx     # Standardized deep layout for all 6 service pages
│   └── WhyChooseAbis.tsx             # 6-pillar value proposition & RPC mastery
├── public/
│   └── brand/                        # 37 verified extracted brand assets & client logos
├── next.config.mjs                   # Image optimization & security headers
├── tailwind.config.ts                # Custom color tokens, font families, animations
├── tsconfig.json                     # TypeScript strict configuration & @ alias
├── vercel.json                       # Turnkey Vercel deployment headers & caching
├── package.json                      # Next.js 14, Tailwind, Lucide, Zod dependencies
└── .env.example                      # Environment variables documentation
```

---

## 5. Local Setup & Development Instructions

### Prerequisites
- Node.js `18.18+` or `20.x`
- npm `10.x` or pnpm / yarn

### Installation
```bash
# 1. Clone repository or enter directory
cd "c:\Users\himaja krishna\OneDrive\Desktop\ABIS\New folder (2)"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 6. Production Build & Quality Verification

To verify linting, TypeScript types, and static compilation:

```bash
# Compile optimized production build
npm run build

# Start local production server
npm run start
```

### Verified Build Metrics
- **Static Routes Pre-rendered:** 21/21
- **Shared First Load JS:** 87.1 kB
- **Total Initial Page Bundle:** 99.2 kB
- **Zero Console Errors / Zero Broken Images**

---

## 7. Form Integration & Backend Setup

Both the **Business Contact Form** (`/contact`) and **Career Application Modal** (`/careers`) are fully functional with client-side state handling and server-side API validation endpoints (`/api/contact` and `/api/careers`).

### Connecting a Live Email / CRM Provider
When ready to route inquiries to live inboxes or CRM pipelines:

1. **Email Dispatch (Resend / SendGrid / Nodemailer):**
   Uncomment or configure your preferred provider in `/app/api/contact/route.ts` and set `RESEND_API_KEY` or `SENDGRID_API_KEY` in `.env.local`.
2. **Resume Storage (AWS S3 / Vercel Blob / Cloudflare R2):**
   In `/app/api/careers/route.ts`, forward `selectedFile` buffer to your cloud storage bucket and store the signed URL in your applicant tracking system (ATS).
3. **Environment Variables:**
   Copy `.env.example` to `.env.local` and define keys:
   ```bash
   cp .env.example .env.local
   ```

---

## 8. Vercel Deployment Instructions

The repository includes a pre-configured `vercel.json` optimized for zero-configuration deployment on Vercel:

### Option A: Via Vercel Web Dashboard (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and assign a production preview URL within 60 seconds.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

> **Security Note:** Deploying to a Vercel preview URL does **not** modify or overwrite the existing production website at `https://akshayaitsolutions.com/` until custom DNS records are explicitly mapped in your domain registrar.

---

## 9. Verified Client Portfolio

The following 24 client logos were retrieved directly from ABIS company assets and are integrated into the verified client marquee:
- **IBM**
- **Deloitte**
- **Siemens**
- **Tata Elxsi**
- **Cyient Ltd**
- **Zensar Technologies**
- **Mouritech**
- **Mentor Graphics (Siemens EDA)**
- **Qentelli**
- **Acuvate**
- **HTC Global Services**
- **Maveric Systems**
- **Vimta Labs**
- **Yethi Consulting**
- **SmartDrive / Omnitracs**
- **VeriPark**
- **Sevitech (UST Global)**
- **IndiaMART**
- **Siemon**
- **GE Mills**
- **Ray**
- **Naarsoft**
- **TechV**
- **SkillAngels**

---

## 10. Maintenance & Future Roadmap
- **Content Updates:** All service text and metadata are modularly stored in `components/ServicesGrid.tsx` and the respective page files.
- **Job Postings:** Update or fetch dynamic openings in `components/CareerPortal.tsx` (or link to a headless CMS / ATS such as Greenhouse or Lever).
- **SEO & Canonical URLs:** Maintained in `app/sitemap.ts`, `app/robots.ts`, and `app/layout.tsx`.
