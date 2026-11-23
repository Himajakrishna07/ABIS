import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Permanent Recruitment Services | Full-Lifecycle Talent Acquisition",
  description:
    "End-to-end permanent recruitment services by Akshaya Business IT Solutions. Solving Recruitment Process Cycle (RPC) challenges across IT, Semiconductor, BFSI, and Automotive.",
};

export default function PermanentRecruitmentPage() {
  return (
    <ServiceDetailTemplate
      slug="permanent-recruitment"
      badge="Specialized Talent Acquisition"
      title="Permanent Recruitment Services"
      subtitle="Strategic, full-lifecycle talent acquisition engineered for long-term organizational value, cultural synergy, and sustained technical impact."
      heroImage="/brand/Recruitment-Services.png"
      tagline="Precision Hiring Engineered for High-Impact Technical Teams"
      overview={[
        "In modern technology and engineering enterprises, permanent hiring is not simply about filling an open headcount — it is about securing institutional knowledge, leadership potential, and technical velocity.",
        "With over two decades of recruitment excellence, Akshaya Business IT Solutions (ABIS) has partnered with prestigious MNCs, captive R&D centers, and global innovators. We specialize in identifying, evaluating, and securing elite engineering and managerial talent across competitive verticals.",
        "Our consultants possess deep vertical familiarity in semiconductor architectures, embedded systems, enterprise cloud, and BFSI platforms, enabling precise candidate matching that shortens onboarding ramps.",
      ]}
      challenges={[
        {
          title: "Extended Time-to-Hire & High Candidate Dropout",
          desc: "Niche engineering roles often remain open for months due to misaligned candidate matching and delayed interview feedback loops.",
        },
        {
          title: "Counter-Offers & Ghosting During Joining",
          desc: "In volatile technical job markets, unmanaged candidate engagement leads to high no-show rates on day one.",
        },
        {
          title: "Shallow Technical Pre-Screening",
          desc: "Hiring managers lose valuable engineering hours interviewing candidates who lack real-world implementation depth.",
        },
        {
          title: "Cultural & Longevity Misalignment",
          desc: "Hires that tick theoretical technical boxes often fail to assimilate within demanding enterprise product engineering environments.",
        },
      ]}
      methodology={[
        {
          step: "Phase 01",
          title: "Role Calibration & Ecosystem Mapping",
          desc: "We analyze the technical architecture, team dynamics, reporting structures, and exact competency matrix with your engineering leadership.",
        },
        {
          step: "Phase 02",
          title: "Passive Talent Sourcing & Intelligence",
          desc: "Leveraging our two-decade proprietary network and deep search algorithms, we engage high-performing passive candidates across target benchmark firms.",
        },
        {
          step: "Phase 03",
          title: "Multi-Tier Competency Assessment",
          desc: "Candidates undergo rigorous screening covering technical problem solving, domain depth, communication fluency, and career aspirations.",
        },
        {
          step: "Phase 04",
          title: "Offer Governance & Post-Joining Engagement",
          desc: "We facilitate transparent compensation negotiations, notice-period transition monitoring, and 90-day onboarding check-ins to ensure seamless retention.",
        },
      ]}
      capabilities={[
        {
          title: "Niche Technology Sourcing",
          desc: "Specialized hunting for VLSI, ASIC, EDA, Cloud Native, RTOS, Cyber Security, and AI/ML engineers.",
        },
        {
          title: "Competency-Based Evaluation",
          desc: "Structured assessments evaluating practical code hygiene, system architecture reasoning, and leadership aptitude.",
        },
        {
          title: "Market Compensation Intelligence",
          desc: "Real-time benchmarking on compensation bands, benefits packages, and talent supply indices across India and the USA.",
        },
        {
          title: "High Joining Assurance SLAs",
          desc: "Continuous candidate relationship management throughout the notice period to drastically minimize reneging.",
        },
      ]}
      clientValue={[
        "Up to 40% reduction in average hiring cycle duration",
        "Significantly higher 12-month post-joining retention",
        "Zero burden on engineering teams for preliminary screening",
        "Replacement guarantee backing every permanent placement",
        "Access to pre-vetted, confidential passive talent networks",
      ]}
      relatedServices={[
        { title: "Contract Staffing Solutions", href: "/services/contract-staffing" },
        { title: "Executive Search & RPO", href: "/services/executive-search-rpo" },
        { title: "Corporate Capability Training", href: "/services/corporate-training" },
      ]}
    />
  );
}
