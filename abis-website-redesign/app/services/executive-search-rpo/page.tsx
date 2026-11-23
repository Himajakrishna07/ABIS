import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Executive Search & RPO Services | Leadership & Outsourced Recruitment",
  description:
    "Discreet C-suite executive search and enterprise Recruitment Process Outsourcing (RPO) by Akshaya Business IT Solutions across India and the USA.",
};

export default function ExecutiveSearchRpoPage() {
  return (
    <ServiceDetailTemplate
      slug="executive-search-rpo"
      badge="Leadership & Enterprise Outsourcing"
      title="Executive Search & RPO Solutions"
      subtitle="Discreet C-suite leadership placement coupled with scalable Recruitment Process Outsourcing (RPO) frameworks designed to act as an institutional extension of your talent operations."
      heroImage="/brand/Executive-Search.png"
      tagline="Strategic Leadership Acquisition & Scalable Recruitment Infrastructure"
      overview={[
        "Securing transformative executive leadership and managing enterprise-scale recruitment pipelines require two distinct but complementary competencies: discreet market intelligence and rigorous operational scale.",
        "ABIS Executive Search provides confidential, board-level talent advisory for enterprise clients seeking CEOs, CTOs, VPs of Engineering, and Practice Directors who can navigate digital disruption and lead large multinational teams.",
        "Simultaneously, our Recruitment Process Outsourcing (RPO) practice embeds dedicated sourcing specialists, talent analytics, and recruitment technologies directly within our client's talent ecosystem — managing everything from candidate screening to hiring analytics under transparent service level agreements.",
      ]}
      challenges={[
        {
          title: "Public Leadership Vacancy Vulnerabilities",
          desc: "Executive vacancies must be managed with absolute confidentiality to avoid market speculation, employee unrest, or competitor advantage.",
        },
        {
          title: "Volatile Enterprise Hiring Volume Swings",
          desc: "Maintaining large internal talent acquisition teams during fluctuating business cycles creates fixed payroll inefficiencies.",
        },
        {
          title: "Passive C-Suite Market Scarcity",
          desc: "Top-tier technology executives are seldom active on public job boards; they require discreet peer-to-peer engagement by seasoned practitioners.",
        },
        {
          title: "Inconsistent Candidate Experience & Employer Branding",
          desc: "Decentralized hiring processes across multiple regional offices dilute corporate employer branding and alienate premium candidates.",
        },
      ]}
      methodology={[
        {
          step: "Phase 01",
          title: "Strategic Alignment & Governance Framework",
          desc: "We align with the Board, CEO, or Head of HR on leadership success profiles, corporate governance expectations, and target company benchmark landscapes.",
        },
        {
          step: "Phase 02",
          title: "Confidential Market Mapping & Headhunting",
          desc: "Our senior partners conduct thorough market mapping across peer institutions, discreetly engaging prospective leaders under strict non-disclosure.",
        },
        {
          step: "Phase 03",
          title: "Psychometric & Leadership Due Diligence",
          desc: "We perform structured competency interviews, 360-degree reference verifications, track-record validation, and leadership capability assessments.",
        },
        {
          step: "Phase 04",
          title: "Offer Structuring & Embedded Transition",
          desc: "We advise on executive compensation, equity incentives, long-term retention packages, and deliver structured 100-day executive onboarding integration.",
        },
      ]}
      capabilities={[
        {
          title: "Retained Executive Search",
          desc: "Dedicated C-suite and senior director headhunting backed by rigorous market research, absolute confidentiality, and replacement guarantees.",
        },
        {
          title: "Enterprise & Project-Based RPO",
          desc: "Configurable outsourcing of end-to-end recruitment or specific business unit pipelines with dedicated onsite/remote recruiters.",
        },
        {
          title: "Talent Pipeline & Competitor Benchmarking",
          desc: "Comprehensive market mapping of rival organizations, organizational design insights, and executive compensation benchmarking.",
        },
        {
          title: "Advanced Recruitment Analytics & Reporting",
          desc: "Full operational transparency into pipeline velocity, interview conversion ratios, source efficiency, and cost-per-hire metrics.",
        },
      ]}
      clientValue={[
        "Total discretion and brand protection for sensitive leadership appointments",
        "Up to 35% reduction in overall talent acquisition operating costs via RPO",
        "Predictable, scalable hiring throughput aligned directly with business targets",
        "Access to elite, passive executive networks across India and North America",
        "Standardized, premium candidate experience enhancing employer brand equity",
      ]}
      relatedServices={[
        { title: "Permanent Recruitment Services", href: "/services/permanent-recruitment" },
        { title: "Strategic HR Advisory Services", href: "/services/hr-services" },
        { title: "Corporate Capability Training", href: "/services/corporate-training" },
      ]}
    />
  );
}
