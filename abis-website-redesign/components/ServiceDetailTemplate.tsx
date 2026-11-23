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
    <div className="min-h-screen bg-[#050A18] text-white">
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
              <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden bg-[#070D24] border border-white/10 p-6 flex items-center justify-center">
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
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {tagline}
                </h2>
                {overview.map((p, i) => (
                  <p key={i} className="text-base text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Hiring & Operational Challenges Solved */}
            <div className="p-8 rounded-3xl bg-[#08112C] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Recruitment Process Cycle (RPC) Challenges We Solve
                  </h3>
                  <p className="text-xs text-slate-400">
                    Overcoming structural friction points across modern workforce operations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {challenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5"
                  >
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {ch.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Proven Methodology */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-abis-blue">
                  Execution Discipline
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Our 4-Stage Delivery Methodology
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {methodology.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#09122C] border border-white/10 space-y-3 relative overflow-hidden group hover:border-abis-blue/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-abis-blue px-2.5 py-1 rounded bg-abis-blue/10 border border-abis-blue/30">
                        {m.step}
                      </span>
                      <GitBranch className="w-4 h-4 text-slate-400 group-hover:text-abis-blue transition-colors" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Enterprise Capabilities */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Technical &amp; Operational Scope
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Key Capabilities &amp; Features
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h4 className="text-sm font-semibold text-white">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
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
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0B1538] to-[#070D24] border border-abis-blue/30 shadow-xl space-y-5">
              <div className="p-3 rounded-2xl bg-abis-blue/20 text-abis-blue w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Accelerate With ABIS {title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our specialized consulting leads to discuss headcount targets, timelines, and tailored delivery models.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(title)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-abis-blue hover:bg-abis-blue-hover transition-colors shadow-lg"
              >
                <span>Request Service Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Client Business Value Highlights */}
            <div className="p-6 rounded-3xl bg-[#081028] border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Measurable Business Value
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                {clientValue.map((val, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Services Links */}
            <div className="p-6 rounded-3xl bg-[#081028] border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Explore Other Services
              </h4>
              <div className="space-y-2">
                {relatedServices.map((rel, i) => (
                  <Link
                    key={i}
                    href={rel.href}
                    className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors text-xs font-medium text-slate-300 hover:text-white"
                  >
                    <span>{rel.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-abis-blue transition-colors" />
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
