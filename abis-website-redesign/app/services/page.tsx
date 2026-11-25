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
    <div className="min-h-screen bg-bg text-fg">
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
              className={`p-8 sm:p-12 rounded-3xl bg-surface border border-theme/60 hover:border-abis-blue/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
            >
              {/* Visual Preview */}
              <div
                className={`lg:col-span-5 relative h-64 sm:h-80 rounded-2xl bg-surface border border-theme/60 p-6 flex items-center justify-center overflow-hidden ${
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
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-on-accent border border-theme/60">
                    {svc.badge}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-fg">
                    Service 0{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-fg mt-1">
                    {svc.title}
                  </h2>
                  <p className="text-sm font-semibold text-accent-fg mt-1">
                    {svc.tagline}
                  </p>
                </div>

                <p className="text-sm text-fg-muted leading-relaxed">
                  {svc.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {svc.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-fg-muted">
                      <CheckCircle2 className="w-4 h-4 text-accent-fg shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-on-accent bg-abis-blue hover:bg-abis-blue-hover transition-colors shadow-lg"
                  >
                    <span>Read In-Depth Service Overview</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-fg-muted hover:text-fg bg-fg/5 hover:bg-fg/5 border border-theme/60 transition-colors"
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
      <section className="py-20 bg-bg border-y border-theme/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-fg">
              Comparison &amp; Selection Guide
            </span>
            <h2 className="text-3xl font-extrabold text-fg">
              Engagement Models At A Glance
            </h2>
            <p className="text-xs sm:text-sm text-fg-subtle">
              Choose the delivery framework that best aligns with your timeline, budget structure, and operational requirements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-theme/60 bg-bg-alt">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-theme/60 bg-fg/5 text-fg-muted uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6">Model</th>
                  <th className="py-4 px-6">Time to Deploy</th>
                  <th className="py-4 px-6">Scale Capability</th>
                  <th className="py-4 px-6">Optimal Strategic Fit</th>
                  <th className="py-4 px-6 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-theme/60 text-fg-muted">
                {engagementComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-fg/5 transition-colors">
                    <td className="py-4 px-6 font-bold text-fg whitespace-nowrap">
                      {row.model}
                    </td>
                    <td className="py-4 px-6 text-accent-fg font-mono">
                      {row.timeframe}
                    </td>
                    <td className="py-4 px-6 text-fg-muted">
                      {row.scale}
                    </td>
                    <td className="py-4 px-6 text-fg-subtle max-w-xs">
                      {row.suitability}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <Link
                        href={row.href}
                        className="text-accent-fg hover:text-accent-fg font-semibold inline-flex items-center gap-1"
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
          <span className="text-xs font-mono uppercase tracking-wider text-accent-fg">
            Client Advisory
          </span>
          <h2 className="text-3xl font-extrabold text-fg">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-fg-subtle">
            Common questions regarding ABIS consulting, recruitment SLA governance, and commercial models.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-surface border border-theme/60 space-y-2"
            >
              <h3 className="text-base font-bold text-fg flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-accent-fg shrink-0" />
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-fg-muted leading-relaxed pl-8">
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
