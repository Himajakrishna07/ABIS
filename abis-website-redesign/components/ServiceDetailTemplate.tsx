import Image from "next/image";
import Link from "next/link";
import PageHeader from "./PageHeader";
import CtaBanner from "./CtaBanner";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  GitBranch,
  Layers,
  ChevronRight,
  Check,
  Zap,
} from "lucide-react";

interface ServiceDetailProps {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  tagline: string;
  overview: string[];
  challenges: { title: string; desc: string }[];
  methodology: { step: string; title: string; desc: string }[];
  capabilities: { title: string; desc: string }[];
  clientValue: string[];
  relatedServices: { title: string; href: string }[];
}

export default function ServiceDetailTemplate({
  slug,
  badge,
  title,
  subtitle,
  heroImage,
  tagline,
  overview,
  challenges,
  methodology,
  capabilities,
  clientValue,
  relatedServices,
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Header */}
      <PageHeader
        badge={badge}
        title={title}
        subtitle={subtitle}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: title },
        ]}
      />

      {/* Main Content Area */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview Section */}
            <div className="space-y-6">
              <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden bg-bg-alt border border-theme/60 p-6 flex items-center justify-center">
                <Image
                  src={heroImage}
                  alt={title}
                  width={520}
                  height={340}
                  className="max-h-full w-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              <div className="space-y-4 pt-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-fg tracking-tight">
                  {tagline}
                </h2>
                {overview.map((p, i) => (
                  <p key={i} className="text-base text-fg-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Hiring & Operational Challenges Solved */}
            <div className="p-8 rounded-3xl bg-surface border border-theme/60 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fg">
                    Recruitment Process Cycle (RPC) Challenges We Solve
                  </h3>
                  <p className="text-xs text-fg-subtle">
                    Overcoming structural friction points across modern workforce operations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {challenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-fg/5 border border-theme/60 space-y-1.5"
                  >
                    <h4 className="text-sm font-semibold text-fg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {ch.title}
                    </h4>
                    <p className="text-xs text-fg-subtle leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Proven Methodology */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent-fg">
                  Execution Discipline
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-fg mt-1">
                  Our 4-Stage Delivery Methodology
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {methodology.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-surface border border-theme/60 space-y-3 relative overflow-hidden group hover:border-abis-blue/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-accent-fg px-2.5 py-1 rounded bg-abis-blue/10 border border-abis-blue/30">
                        {m.step}
                      </span>
                      <GitBranch className="w-4 h-4 text-fg-subtle group-hover:text-accent-fg transition-colors" />
                    </div>
                    <h4 className="text-base font-bold text-fg">
                      {m.title}
                    </h4>
                    <p className="text-xs text-fg-subtle leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Enterprise Capabilities */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent-fg">
                  Technical &amp; Operational Scope
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-fg mt-1">
                  Key Capabilities &amp; Features
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-fg/5 border border-theme/60 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent-fg shrink-0" />
                      <h4 className="text-sm font-semibold text-fg">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-fg-subtle leading-relaxed pl-6">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Quick Consultation Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-surface to-bg-alt border border-abis-blue/30 shadow-xl space-y-5">
              <div className="p-3 rounded-2xl bg-abis-blue/20 text-accent-fg w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-fg">
                Accelerate With ABIS {title}
              </h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                Connect directly with our specialized consulting leads to discuss headcount targets, timelines, and tailored delivery models.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(title)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-semibold text-sm text-on-accent bg-abis-blue hover:bg-abis-blue-hover transition-colors shadow-lg"
              >
                <span>Request Service Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Client Business Value Highlights */}
            <div className="p-6 rounded-3xl bg-surface border border-theme/60 space-y-4">
              <h4 className="text-sm font-bold text-fg uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Measurable Business Value
              </h4>
              <ul className="space-y-3 text-xs text-fg-muted">
                {clientValue.map((val, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Services Links */}
            <div className="p-6 rounded-3xl bg-surface border border-theme/60 space-y-4">
              <h4 className="text-sm font-bold text-fg uppercase tracking-wider">
                Explore Other Services
              </h4>
              <div className="space-y-2">
                {relatedServices.map((rel, i) => (
                  <Link
                    key={i}
                    href={rel.href}
                    className="group flex items-center justify-between p-3 rounded-xl bg-fg/5 hover:bg-fg/5 transition-colors text-xs font-medium text-fg-muted hover:text-fg"
                  >
                    <span>{rel.title}</span>
                    <ChevronRight className="w-4 h-4 text-fg-subtle group-hover:text-accent-fg transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CtaBanner
        title={`Ready to deploy ${title}?`}
        subtitle="Schedule a consultation with our specialized practice leads in Hyderabad, Bengaluru, or the USA."
        primaryButtonText="Discuss Requirements"
        primaryButtonHref={`/contact?service=${encodeURIComponent(title)}`}
      />
    </div>
  );
}
