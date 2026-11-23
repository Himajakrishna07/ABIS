import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Corporate Training & Capability Building | Workforce Upskilling Solutions",
  description:
    "Tailored corporate training and organizational learning programs by Akshaya Business IT Solutions. Upskill engineering and leadership teams across modern technologies.",
};

export default function CorporateTrainingPage() {
  return (
    <ServiceDetailTemplate
      slug="corporate-training"
      badge="Workforce Development & Upskilling"
      title="Corporate Training & Capability Building"
      subtitle="Customized organizational learning programs, emerging technology bootcamps, and leadership capability workshops designed to elevate collective team productivity."
      heroImage="/brand/Corporate-Training.png"
      tagline="Empowering Technology Teams to Master Rapidly Evolving Toolchains"
      overview={[
        "In a rapidly transforming technology landscape, workforce capability is the single greatest determinant of sustainable competitive advantage. Organizations that fail to continuously upskill their existing engineering talent face chronic talent shortages and mounting project delays.",
        "Akshaya Business IT Solutions (ABIS) delivers high-impact corporate training solutions tailored directly to enterprise project roadmaps. Our programs bridge critical knowledge deficits in emerging architectures, cloud infrastructure, semiconductor methodologies, and agile engineering leadership.",
        "Delivered by certified industry practitioners with decades of active project experience, our training modules combine rigorous theoretical frameworks with intensive hands-on lab environments — transforming knowledge into immediate execution capability.",
      ]}
      challenges={[
        {
          title: "Widening Technology Skill Gaps in Engineering Teams",
          desc: "Legacy teams struggle to transition rapidly to cloud-native architectures, containerization, microservices, and modern verification methodologies.",
        },
        {
          title: "Theoretical Training Without Practical Applicability",
          desc: "Generic e-learning courses fail to translate into practical engineering proficiency, resulting in low knowledge retention and zero productivity uplift.",
        },
        {
          title: "Prolonged Project Onboarding Ramps for Lateral Hires",
          desc: "New hires spend months ramping up on internal architectural standards and codebase practices before contributing code.",
        },
        {
          title: "Leadership & Behavioral Friction in Technical Managers",
          desc: "High-performing individual contributors elevated to engineering management often lack critical people leadership and stakeholder communication skills.",
        },
      ]}
      methodology={[
        {
          step: "Phase 01",
          title: "Skills Gap Diagnostic & Curriculum Design",
          desc: "We assess current technical competencies against your forward-looking project milestones, co-creating customized learning roadmaps with team leads.",
        },
        {
          step: "Phase 02",
          title: "Hands-On Lab & Sandbox Provisioning",
          desc: "We configure realistic sandbox environments simulating live enterprise architectures, production data flows, and CI/CD pipelines.",
        },
        {
          step: "Phase 03",
          title: "Practitioner-Led Interactive Instruction",
          desc: "Seasoned industry experts lead cohort workshops, code walkthroughs, design review simulations, and architectural troubleshooting sessions.",
        },
        {
          step: "Phase 04",
          title: "Capstones, Assessment & Impact Metrics",
          desc: "Participants complete comprehensive capstone projects, followed by post-training proficiency benchmarks and manager feedback loops.",
        },
      ]}
      capabilities={[
        {
          title: "Customized Enterprise Technology Curricula",
          desc: "Modular workshops in Cloud (AWS/Azure/GCP), DevOps, Microservices, Python, Java, VLSI verification, and Embedded RTOS.",
        },
        {
          title: "On-Demand New Hire Bootcamps",
          desc: "Accelerated 4-to-8 week onboarding programs converting fresh campus recruits or lateral hires into productive project-ready engineers.",
        },
        {
          title: "Engineering Leadership Transformation",
          desc: "Targeted coaching for Tech Leads and Engineering Managers covering sprint governance, empathetic leadership, and architectural conflict resolution.",
        },
        {
          title: "Blended In-Person & Virtual Cohorts",
          desc: "Flexible hybrid delivery models accommodating distributed engineering squads across multiple time zones in India and the USA.",
        },
      ]}
      clientValue={[
        "Measurable 50% compression in project ramp-up time for new hires",
        "Significantly improved team velocity and reduced production defect rates",
        "High employee engagement and reduced voluntary engineering turnover",
        "Cost-effective alternative to continuous expensive lateral replacement hiring",
        "Curricula directly tailored to your proprietary tools and architectures",
      ]}
      relatedServices={[
        { title: "Strategic HR Advisory Services", href: "/services/hr-services" },
        { title: "Permanent Recruitment Services", href: "/services/permanent-recruitment" },
        { title: "Application Development & Support", href: "/services/application-development" },
      ]}
    />
  );
}
