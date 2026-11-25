import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, ChevronRight, Globe2, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden tech-grid radial-glow pt-12 pb-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-abis-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Enterprise Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fg/5 border border-abis-blue/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-abis-blue animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-fg">
                Enterprise IT Consulting &amp; Staffing Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-fg leading-[1.12]">
              Building Businesses Through{" "}
              <span className="text-gradient-blue">People, Technology</span>{" "}
              &amp; <span className="text-gradient-cyan">Innovation.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-fg-muted leading-relaxed max-w-2xl font-normal">
              Empowering global organizations through intelligent talent solutions, strategic IT consulting, specialized workforce expertise, and technology-driven business services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base text-on-accent bg-abis-blue hover:bg-abis-blue-hover transition-all duration-300 shadow-[0_10px_35px_-5px_rgba(32,109,247,0.45)] hover:shadow-[0_15px_40px_-5px_rgba(32,109,247,0.65)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-fg bg-fg/5 hover:bg-fg/5 border border-theme/60 hover:border-theme/60 transition-all duration-200"
              >
                <span>Partner With Us</span>
              </Link>
            </div>

            {/* Verified highlights pill row */}
            <div className="pt-6 border-t border-theme/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-fg-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-fg shrink-0" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-fg shrink-0" />
                <span>India &amp; USA Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Fortune 500 Trusted</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Connected Ecosystem Graphic & Floating Metrics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Central Glowing Framework Card */}
              <div className="relative rounded-3xl p-8 glass-panel border border-theme/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-abis-blue/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-6 border-b border-theme/60">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-accent-fg">
                      ABIS Extended Partner Model
                    </span>
                    <h3 className="text-xl font-bold text-fg mt-1">
                      Full-Spectrum Delivery
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-xl bg-abis-blue/20 text-accent-fg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {/* Interactive Capability Matrix */}
                <div className="space-y-3.5 py-6">
                  {[
                    { label: "Permanent Recruitment", status: "Full Lifecycle RPC", color: "bg-blue-500" },
                    { label: "Contract Tech Staffing", status: "Agile Scale-Up", color: "bg-cyan-500" },
                    { label: "Executive Search & RPO", status: "Leadership & Pipeline", color: "bg-indigo-500" },
                    { label: "Corporate Training & HR", status: "Organizational Learning", color: "bg-emerald-500" },
                    { label: "Application Support", status: "Enterprise Tech", color: "bg-sky-500" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-fg/5 hover:bg-fg/5 border border-theme/60 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium text-fg">{item.label}</span>
                      </div>
                      <span className="text-xs font-mono text-fg-subtle bg-fg/5 px-2.5 py-1 rounded-md">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Quote */}
                <div className="pt-4 border-t border-theme/60 flex items-center justify-between text-xs text-fg-subtle">
                  <span>Recruitment Process Cycle (RPC) Mastery</span>
                  <Link href="/who-we-are" className="text-accent-fg hover:text-accent-fg font-medium inline-flex items-center gap-1">
                    Discover Our Story <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Floating Decorative Cards */}
              <div className="absolute -bottom-6 -left-6 bg-surface border border-theme/60 p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 backdrop-blur-xl">
                <div className="p-3 rounded-xl bg-abis-blue/20 text-accent-fg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-fg-subtle">Experience</div>
                  <div className="text-base font-bold text-fg">20+ Years Excellence</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-surface border border-theme/60 p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 backdrop-blur-xl">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-accent-fg">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-fg-subtle">Global Reach</div>
                  <div className="text-base font-bold text-fg">India &amp; USA Presence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
