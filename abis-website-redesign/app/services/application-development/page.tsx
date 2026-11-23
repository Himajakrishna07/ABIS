import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Application Development & Support | Enterprise Software Solutions",
  description:
    "End-to-end application development, system modernization, and technical support services by Akshaya Business IT Solutions across India and the USA.",
};

export default function ApplicationDevelopmentPage() {
  return (
    <ServiceDetailTemplate
      slug="application-development"
      badge="Engineering & Maintenance"
      title="Application Development & Support"
      subtitle="End-to-end application lifecycle management, enterprise software engineering, robust systems integration, and dependable post-deployment technical maintenance."
      heroImage="/brand/App_dev-1.png"
      tagline="Reliable Software Engineering & Continuous Technical Support"
      overview={[
        "Modern enterprise software requires continuous evolution. From engineering custom business applications to modernizing mission-critical legacy workflows, organizations need technical partners who deliver both engineering precision and long-term operational stability.",
        "Akshaya Business IT Solutions (ABIS) provides comprehensive Application Development and Support services. We support clients through the full application lifecycle — including architecture planning, custom software engineering, quality testing, and continuous maintenance.",
        "Whether your goal is building a customer-facing enterprise portal, integrating fragmented departmental software, or maintaining business-critical systems with strict SLA governance, ABIS provides dependable engineering bandwidth tailored to your business needs.",
      ]}
      challenges={[
        {
          title: "Legacy System Maintenance Burden & High Operating Costs",
          desc: "Legacy platforms divert internal engineering teams from strategic innovation, consuming disproportionate budget on routine defect fixing.",
        },
        {
          title: "Fragmented Enterprise Data & Lack of System Interoperability",
          desc: "Disparate business software systems fail to communicate, causing data silos, manual reconciliation bottlenecks, and operational errors.",
        },
        {
          title: "Production Downtime & Inadequate Incident Response SLAs",
          desc: "Lack of dedicated, structured technical support teams leads to delayed incident resolutions and costly business disruption.",
        },
        {
          title: "Capacity Shortages During Product Release Milestones",
          desc: "Sudden surges in development backlogs outstrip internal engineering capacity, threatening go-to-market commitments.",
        },
      ]}
      methodology={[
        {
          step: "Phase 01",
          title: "Requirements Discovery & Architecture Scoping",
          desc: "We analyze business workflows, data models, integration touchpoints, performance targets, and security expectations.",
        },
        {
          step: "Phase 02",
          title: "Iterative Engineering & Quality Testing",
          desc: "We execute structured development sprints, continuous code reviews, unit testing, and integration verification to ensure software stability.",
        },
        {
          step: "Phase 03",
          title: "Production Deployment & User Acceptance",
          desc: "We coordinate deployment procedures, user acceptance testing (UAT), data migration verification, and end-user enablement.",
        },
        {
          step: "Phase 04",
          title: "SLA-Driven Maintenance & Continuous Support",
          desc: "We establish dedicated multi-tier support, monitoring system health, addressing bug fixes, applying security patches, and executing optimizations.",
        },
      ]}
      capabilities={[
        {
          title: "Custom Enterprise Application Engineering",
          desc: "Designing and developing scalable web and enterprise business applications aligned with unique operational workflows.",
        },
        {
          title: "Application Maintenance & L2/L3 Support",
          desc: "Dedicated ongoing technical support, system health monitoring, bug remediation, and SLA-governed incident resolution.",
        },
        {
          title: "System Integration & API Engineering",
          desc: "Connecting disparate third-party, cloud, and on-premise business software to ensure seamless real-time data synchronization.",
        },
        {
          title: "Quality Assurance & Test Automation",
          desc: "Comprehensive functional, performance, and regression testing ensuring zero-defect deployments across enterprise environments.",
        },
      ]}
      clientValue={[
        "Guaranteed uptime and predictable response times via strict SLA governance",
        "Free up your core product engineers to focus on high-value business innovation",
        "Cost-effective ongoing maintenance compared to full-time internal engineering squads",
        "Scalable technical support that expands as your application user base multiplies",
        "Robust software documentation and knowledge transfer protecting institutional IP",
      ]}
      relatedServices={[
        { title: "Contract Staffing Solutions", href: "/services/contract-staffing" },
        { title: "Permanent Recruitment Services", href: "/services/permanent-recruitment" },
        { title: "Corporate Capability Training", href: "/services/corporate-training" },
      ]}
    />
  );
}
