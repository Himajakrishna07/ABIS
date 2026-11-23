import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "HR Services & Advisory Solutions | Organizational Development & Leadership",
  description:
    "Strategic HR consulting, organizational development, and leadership transformation by Akshaya Business IT Solutions across India and the USA.",
};

export default function HrServicesPage() {
  return (
    <ServiceDetailTemplate
      slug="hr-services"
      badge="Strategic Advisory & Culture"
      title="HR Services & Advisory Solutions"
      subtitle="Comprehensive human resources consulting, organizational development (OD), leadership mentoring, and strategic workforce policy structuring designed for performance-driven corporate cultures."
      heroImage="/brand/HR.jpg"
      tagline="Transforming Workplace Culture & Elevating Organizational Performance"
      overview={[
        "Sustainable enterprise scale is built on strong people architecture. As technology organizations expand across geographies, establishing clear organizational structures, equitable compensation frameworks, and vibrant employee cultures becomes paramount.",
        "Akshaya Business IT Solutions (ABIS) provides end-to-end HR advisory and consulting services. We partner with leadership teams to design and implement human capital frameworks that attract top-tier talent, foster meritocracy, and minimize operational friction.",
        "From corporate governance and compliance audits to leadership coaching and performance management system design, ABIS brings over two decades of practical advisory experience to elevate your human resources into a strategic growth driver.",
      ]}
      challenges={[
        {
          title: "Ad-Hoc HR Policies & Mounting Compliance Risks",
          desc: "Rapidly scaling companies often outgrow early informal practices, creating legal liabilities and inconsistent workplace standards across locations.",
        },
        {
          title: "Ineffective Performance Appraisal & Goal-Setting Frameworks",
          desc: "Ambiguous appraisal systems trigger employee dissatisfaction, demotivate top performers, and obscure genuine organizational output.",
        },
        {
          title: "Executive Misalignment & Cultural Fragmentation",
          desc: "M&A events, multi-city expansions, or rapid headcount surges often dilute foundational company values and damage employee morale.",
        },
        {
          title: "High Unwanted Attrition of Core Technical Contributors",
          desc: "Lack of clear career progression ladders, mentoring programs, or recognition mechanisms drives key talent to competitors.",
        },
      ]}
      methodology={[
        {
          step: "Phase 01",
          title: "HR Diagnostic & Organizational Audit",
          desc: "We perform a comprehensive audit of existing policies, statutory compliance records, compensation structures, and employee sentiment metrics.",
        },
        {
          step: "Phase 02",
          title: "Strategic Policy & Org Architecture Co-Creation",
          desc: "We formulate tailored HR manuals, grade-band hierarchies, competency models, and incentive frameworks aligned with corporate objectives.",
        },
        {
          step: "Phase 03",
          title: "Implementation & Leadership Enablement",
          desc: "We roll out new performance review mechanisms, conduct managerial workshops, and guide leadership through effective change management.",
        },
        {
          step: "Phase 04",
          title: "Continuous Governance & Culture Monitoring",
          desc: "We institute pulse surveys, retention analytics, grievance redressal protocols, and quarterly policy health checks.",
        },
      ]}
      capabilities={[
        {
          title: "Organizational Design & Grade Band Structuring",
          desc: "Architecting transparent title matrices, reporting hierarchies, and promotion benchmarks tailored to technology organizations.",
        },
        {
          title: "Performance Management Systems (OKRs & KPIs)",
          desc: "Designing objective, metric-driven goal setting and performance evaluation frameworks that reward measurable business impact.",
        },
        {
          title: "Statutory HR Compliance & Policy Manuals",
          desc: "Developing robust corporate policies covering POSH, code of conduct, remote work governance, and statutory benefits compliance.",
        },
        {
          title: "Leadership Mentoring & Executive Coaching",
          desc: "Empowering founders, VP leaders, and mid-level managers with emotional intelligence, conflict resolution, and communication coaching.",
        },
      ]}
      clientValue={[
        "Clear, meritocratic career progression pathways boosting employee retention",
        "Total statutory compliance and elimination of workplace legal liabilities",
        "Higher employee engagement scores and energized corporate culture",
        "Objective performance evaluations directly linked to enterprise business goals",
        "Harmonized cross-border HR policies between Indian and USA operations",
      ]}
      relatedServices={[
        { title: "Corporate Capability Training", href: "/services/corporate-training" },
        { title: "Executive Search & RPO", href: "/services/executive-search-rpo" },
        { title: "Permanent Recruitment Services", href: "/services/permanent-recruitment" },
      ]}
    />
  );
}
