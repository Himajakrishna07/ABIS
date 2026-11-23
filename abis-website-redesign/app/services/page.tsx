import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { servicesData } from "@/components/ServicesGrid";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services Overview | Enterprise IT Solutions & Staffing Directory",
  description:
    "Explore the complete suite of IT consulting, recruitment, and workforce solutions offered by Akshaya Business IT Solutions (ABIS) across India and the USA.",
};

const engagementComparison = [
  {
    model: "Permanent Recruitment",
    timeframe: "2 - 4 Weeks",
    scale: "Niche to High-Volume",
    suitability: "Core engineering, leadership, and long-term strategic positions",
    href: "/services/permanent-recruitment",
  },
  {
    model: "Contract Staffing",
    timeframe: "48 - 72 Hours",
    scale: "Flexible / Elastic",
    suitability: "Project rollouts, specialized surge capacity, and workload spikes",
    href: "/services/contract-staffing",
  },
  {
    model: "Executive Search & RPO",
    timeframe: "Retained / Multi-Year",
    scale: "Enterprise-Wide",
    suitability: "C-suite, VP leadership & complete outsourced hiring infrastructure",
    href: "/services/executive-search-rpo",
  },
  {
    model: "Corporate Training",
    timeframe: "Customized Cohorts",
    scale: "Team / Dept / Org",
    suitability: "Workforce reskilling, emerging tech adoption & leadership dev",
    href: "/services/corporate-training",
  },
  {
    model: "HR Advisory Services",
    timeframe: "Consulting Retainer",
    scale: "Enterprise Leadership",
    suitability: "Org restructuring, performance policy & culture transformation",
    href: "/services/hr-services",
  },
  {
    model: "Application Development",
    timeframe: "Sprint / SLA-Based",
    scale: "Project / Product",
    suitability: "Custom enterprise software engineering, maintenance & L2/L3 support",
    href: "/services/application-development",
  },
];

const faqs = [
  {
    q: "How does ABIS optimize the Recruitment Process Cycle (RPC)?",
    a: "We systematically address every stage of the RPC — from initial technical profiling and passive talent mapping to structured multi-tier screening, compensation alignment, and offer-to-joining transition management. This reduces dropouts and accelerates time-to-productivity.",
  },
  {
    q: "Can ABIS handle cross-border hiring between India and the United States?",
    a: "Yes. With operations in Hyderabad, Bengaluru, and New Jersey (USA), we facilitate seamless talent acquisition, compliant payroll governance, and remote/onsite technical staffing across both geographies.",
  },
  {
    q: "What technical domains are ABIS's core strengths?",
    a: "While we support comprehensive enterprise IT, we possess deep heritage in high-complexity sectors including Semiconductors & VLSI, EDA, Embedded Systems, Cloud Architectures, Core BFSI fintech, Automotive mobility, and Telecom engineering.",
  },
  {
    q: "How do we get started with an engagement?",
    a: "Contact our client solutions team via our website or email hr@akshayaitsolutions.com. A dedicated practice lead will analyze your headcount goals, technical requirements, and propose a tailored engagement model within 24 hours.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050A18] text-white">
      {/* Header */}
      <PageHeader
        badge="Solutions Portfolio"
        title="Comprehensive IT Consulting &amp; Workforce Solutions."
        subtitle="End-to-end capabilities tailored to empower Fortune 500 multinationals, technology innovators, and emerging enterprises across the complete talent lifecycle."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Main Services List */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {servicesData.map((svc, idx) => (
            <div
              key={svc.id}
              className={`p-8 sm:p-12 rounded-3xl bg-[#08112C] border border-white/10 hover:border-abis-blue/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
            >
              {/* Visual Preview */}
              <div
                className={`lg:col-span-5 relative h-64 sm:h-80 rounded-2xl bg-[#060B1C] border border-white/5 p-6 flex items-center justify-center overflow-hidden ${
                  idx % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${svc.accent} opacity-40`}
                />
                <Image
                  src={svc.image}
                  alt={svc.title}
                  width={420}
                  height={280}
                  className="max-h-full w-auto object-contain drop-shadow-xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-white border border-white/15">
                    {svc.badge}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Service 0{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {svc.title}
                  </h2>
                  <p className="text-sm font-semibold text-abis-blue mt-1">
                    {svc.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {svc.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {svc.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-abis-blue shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-abis-blue hover:bg-abis-blue-hover transition-colors shadow-lg"
                  >
                    <span>Read In-Depth Service Overview</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span>Request Service Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Comparison Table */}
      <section className="py-20 bg-[#040816] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-abis-blue">
              Comparison &amp; Selection Guide
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Engagement Models At A Glance
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Choose the delivery framework that best aligns with your timeline, budget structure, and operational requirements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#070D24]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-slate-300 uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6">Model</th>
                  <th className="py-4 px-6">Time to Deploy</th>
                  <th className="py-4 px-6">Scale Capability</th>
                  <th className="py-4 px-6">Optimal Strategic Fit</th>
                  <th className="py-4 px-6 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {engagementComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white whitespace-nowrap">
                      {row.model}
                    </td>
                    <td className="py-4 px-6 text-cyan-400 font-mono">
                      {row.timeframe}
                    </td>
                    <td className="py-4 px-6 text-slate-300">
                      {row.scale}
                    </td>
                    <td className="py-4 px-6 text-slate-400 max-w-xs">
                      {row.suitability}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <Link
                        href={row.href}
                        className="text-abis-blue hover:text-sky-300 font-semibold inline-flex items-center gap-1"
                      >
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-abis-blue">
            Client Advisory
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Common questions regarding ABIS consulting, recruitment SLA governance, and commercial models.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#08112C] border border-white/10 space-y-2"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-abis-blue shrink-0" />
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        title="Discuss Your Next Staffing or Technology Mandate"
        subtitle="Our client solutions leads will structure a custom proposal tailored to your technical requirements and milestones."
        primaryButtonText="Contact Our Solutions Team"
        primaryButtonHref="/contact"
      />
    </div>
  );
}
