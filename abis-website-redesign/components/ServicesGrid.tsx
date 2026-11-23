import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const servicesData = [
  {
    id: "permanent-recruitment",
    title: "Permanent Recruitment Services",
    href: "/services/permanent-recruitment",
    image: "/brand/Recruitment-Services.png",
    tagline: "Precision hiring for long-term organizational impact",
    description:
      "Strategic talent acquisition tailored for key technical and managerial roles. We manage the end-to-end Recruitment Process Cycle (RPC) to optimize candidate quality, cultural alignment, and long-term retention.",
    highlights: [
      "Rigorous multi-stage candidate evaluation",
      "Specialized niche technical domain sourcing",
      "Optimized time-to-hire & reduced RPC dropouts",
      "High offer-acceptance and retention ratios",
    ],
    accent: "from-blue-600/20 to-transparent",
    badge: "Full-Time Talent",
  },
  {
    id: "contract-staffing",
    title: "Contract Staffing Solutions",
    href: "/services/contract-staffing",
    image: "/brand/OS-1.png",
    tagline: "Agile, high-velocity technical workforce scalability",
    description:
      "Rapidly scale specialized technical bandwidth for mission-critical product rollouts, cyclical demands, or niche project sprints without administrative overhead or long-term liability.",
    highlights: [
      "Rapid onboarding & turnaround SLAs",
      "Comprehensive compliance and payroll governance",
      "Specialized project-based technical talent",
      "Seamless contract-to-hire flexibility",
    ],
    accent: "from-cyan-600/20 to-transparent",
    badge: "Agile Workforce",
  },
  {
    id: "executive-search-rpo",
    title: "Executive Search & RPO",
    href: "/services/executive-search-rpo",
    image: "/brand/Executive-Search.png",
    tagline: "Leadership placement & scalable recruitment outsourcing",
    description:
      "Discreet executive search for senior leadership and C-suite talent, combined with configurable Recruitment Process Outsourcing (RPO) models that act as an institutional extension of your talent team.",
    highlights: [
      "Confidential C-suite and VP leadership mapping",
      "Configurable enterprise-wide RPO delivery models",
      "Advanced candidate pipeline benchmarking",
      "Strategic talent analytics and market intelligence",
    ],
    accent: "from-indigo-600/20 to-transparent",
    badge: "Leadership & Enterprise",
  },
  {
    id: "corporate-training",
    title: "Corporate Training & Capability Building",
    href: "/services/corporate-training",
    image: "/brand/Corporate-Training.png",
    tagline: "Workforce upskilling and organizational learning",
    description:
      "Empower your workforce with tailored corporate training programs designed to bridge emerging technology skill gaps, foster continuous learning, and elevate collective team productivity.",
    highlights: [
      "Customized curricula aligned with project roadmaps",
      "Hands-on technical workshops & modern toolchains",
      "Domain-specific engineering & behavioral training",
      "Measurable performance and skill-uplift tracking",
    ],
    accent: "from-emerald-600/20 to-transparent",
    badge: "Capability Building",
  },
  {
    id: "hr-services",
    title: "HR Services & Advisory Solutions",
    href: "/services/hr-services",
    image: "/brand/HR.jpg",
    tagline: "Strategic HR consulting & leadership transformation",
    description:
      "Holistic human resources consulting, organizational development (OD), leadership mentoring, and strategic workforce policy structuring designed to foster performance-driven corporate cultures.",
    highlights: [
      "Comprehensive HR policy design & audit",
      "Performance management and appraisal frameworks",
      "Leadership transformation and coaching",
      "Organizational culture & retention strategy",
    ],
    accent: "from-amber-600/20 to-transparent",
    badge: "Advisory & Transformation",
  },
  {
    id: "application-development",
    title: "Application Development & Support",
    href: "/services/application-development",
    image: "/brand/App_dev-1.png",
    tagline: "Robust software engineering and continuous system support",
    description:
      "End-to-end application lifecycle management, modern software engineering, enterprise integrations, and dependable post-deployment technical maintenance services.",
    highlights: [
      "Full-stack custom software development",
      "Application maintenance, modernization & L2/L3 support",
      "Quality assurance and performance stabilization",
      "Dedicated technical support teams",
    ],
    accent: "from-sky-600/20 to-transparent",
    badge: "Engineering & Maintenance",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#070C1E] relative tech-grid overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-abis-blue/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-abis-blue/10 border border-abis-blue/30 text-abis-blue text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Specialized Services Tailored for{" "}
            <span className="text-gradient-blue">Enterprise Growth.</span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Our end-to-end capabilities span the complete talent, workforce, and technology lifecycle — configured precisely to meet the scaling demands of modern businesses.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="group rounded-3xl bg-[#09122C] border border-white/10 hover:border-abis-blue/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_45px_-10px_rgba(32,109,247,0.25)]"
            >
              <div>
                {/* Visual Header with Real Image from Brand */}
                <div className="relative h-52 w-full overflow-hidden bg-[#060B1C] border-b border-white/5 flex items-center justify-center p-4">
                  <div className={`absolute inset-0 bg-gradient-to-t ${svc.accent} opacity-40 group-hover:opacity-70 transition-opacity`} />
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={400}
                    height={260}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-black/60 backdrop-blur-md text-white border border-white/15">
                      {svc.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-abis-blue transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 mt-1">
                      {svc.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {svc.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="pt-2 border-t border-white/5 space-y-2">
                    {svc.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-abis-blue shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 pt-0">
                <Link
                  href={svc.href}
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] group-hover:bg-abis-blue text-sm font-semibold text-white transition-all duration-200"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Directory Prompt */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-abis-blue/50 transition-all"
          >
            <span>Need a custom engagement model? Browse our complete services directory</span>
            <ArrowRight className="w-4 h-4 text-abis-blue" />
          </Link>
        </div>
      </div>
    </section>
  );
}
