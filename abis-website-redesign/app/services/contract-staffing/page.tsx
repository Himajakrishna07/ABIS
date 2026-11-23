import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Contract Staffing Solutions | Flexible Technical Workforce Scaling",
  description:
    "Agile contract technical staffing by Akshaya Business IT Solutions. Deploy pre-vetted engineers, architects, and specialists with rapid turnarounds across India and the USA.",
};

export default function ContractStaffingPage() {
  return (
    <ServiceDetailTemplate
      slug="contract-staffing"
      badge="Agile Technical Workforce"
      title="Contract Staffing Solutions"
      subtitle="Rapidly deploy pre-screened technical specialists to scale your engineering velocity, manage cyclical demands, and fulfill mission-critical project roadmaps."
      heroImage="/brand/OS-1.png"
      tagline="Elastic Engineering Bandwidth Without Administrative Overhead"
      overview={[
        "Modern technology initiatives demand elastic capacity. When critical release milestones, legacy modernizations, or specialized silicon verification cycles approach, waiting months for permanent hiring introduces unacceptable business risk.",
        "Akshaya Business IT Solutions (ABIS) provides agile contract staffing services that empower enterprise organizations to inject specialized technical capability on-demand. We handle end-to-end recruitment, payroll administration, legal compliance, and ongoing talent performance governance.",
        "Whether you need a standalone technical specialist for a 6-month product sprint or a 50-person engineering cohort deployed across offshore development centers, ABIS delivers rapid, accountable, and legally compliant workforce solutions.",
      ]}
      challenges={[
        {
          title: "Sudden Skill Spikes & Immediate Project Deadlines",
          desc: "Unplanned client deliverables or sudden tech stack migrations require instant domain expertise that internal teams cannot spare.",
        },
        {
          title: "Complex Multi-State & Cross-Border Compliance",
          desc: "Navigating labor regulations, statutory benefits, tax withholding, and IP confidentiality across India and the US is high friction.",
        },
        {
          title: "Contractor Quality Inconsistency & Premature Attrition",
          desc: "Generic staffing agencies frequently provide unvetted contractors who fail technical benchmarks or abandon projects mid-stream.",
        },
        {
          title: "Administrative & Payroll Overhead",
          desc: "Managing dozens of individual contractor agreements and invoicing schedules distracts corporate leadership from core product roadmaps.",
        },
      ]}
      methodology={[
        {
          step: "Phase 01",
          title: "Demand Specification & SLA Agreement",
          desc: "We define precise skill requirements, tooling proficiencies, project duration, security clearance protocols, and target onboarding timelines.",
        },
        {
          step: "Phase 02",
          title: "Pre-Vetted Contractor Bench Mobilization",
          desc: "We tap into our active bench and pre-screened talent pools, shortlisting candidates verified through technical challenges and previous client reviews.",
        },
        {
          step: "Phase 03",
          title: "Rapid Client Interview & Selection",
          desc: "We coordinate rapid video interviews, technical vetting, and rate card finalizations within a compressed 48-to-72-hour window.",
        },
        {
          step: "Phase 04",
          title: "Onboarding, Compliance & Dedicated Governance",
          desc: "ABIS assumes full employer-of-record responsibility: statutory benefits, non-disclosure agreements, equipment provisioning, and monthly performance tracking.",
        },
      ]}
      capabilities={[
        {
          title: "Turnkey Payroll & Statutory Compliance",
          desc: "Full adherence to PF, ESI, gratuity, statutory tax deductions, and international labor standards with zero client legal liability.",
        },
        {
          title: "Flexible Contract-to-Hire (C2H) Transitions",
          desc: "Evaluate high-performing contractors in your live production environment before transitioning them seamlessly to your permanent payroll.",
        },
        {
          title: "Dedicated Account & Delivery Managers",
          desc: "A single point of contact responsible for contractor wellness, SLA reporting, time-sheet approvals, and rapid replacements if needed.",
        },
        {
          title: "Specialized Hardware & Software Talent",
          desc: "Embedded software, FPGA design, verification, full-stack cloud, DevOps, QA automation, and database administration specialists.",
        },
      ]}
      clientValue={[
        "Deployment turnarounds as fast as 48 to 72 hours for verified roles",
        "Zero long-term headcount liability or severance overhead",
        "Seamless scalability to ramp up or down based on release milestones",
        "100% statutory and regulatory legal compliance indemnity",
        "Pre-evaluated technical talent vetted by industry practitioners",
      ]}
      relatedServices={[
        { title: "Permanent Recruitment Services", href: "/services/permanent-recruitment" },
        { title: "Application Support & Maintenance", href: "/services/application-development" },
        { title: "Corporate Capability Training", href: "/services/corporate-training" },
      ]}
    />
  );
}
