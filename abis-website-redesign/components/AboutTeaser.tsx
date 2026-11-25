import Link from "next/link";
import { ArrowRight, Target, Compass, CheckCircle2, ChevronRight, Zap } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-abis-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-abis-blue/10 border border-abis-blue/30 text-accent-fg text-xs font-semibold uppercase tracking-wider">
              About Akshaya Business IT Solutions
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-gradient-blue">Business &amp; Technology</span> Solutions.
            </h2>

            <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
              Akshaya Business IT Solutions (ABIS) is a leading end-to-end IT business solution provider. We partner with organizations over long horizons, serving as an extended arm to resolve critical recruitment, workforce scaling, and technology implementation bottlenecks.
            </p>

            <p className="text-sm text-fg-subtle leading-relaxed">
              With over two decades of dedicated recruitment and consulting excellence, ABIS has helped organizations overcome the continuous friction points of the Recruitment Process Cycle (RPC) — constantly optimizing velocity, talent fit, and operational retention.
            </p>

            {/* Vision and Mission Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-surface border border-theme/60 hover:border-abis-blue/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-abis-blue/20 text-accent-fg">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-fg uppercase tracking-wider">
                    Our Vision
                  </h3>
                </div>
                <p className="text-xs text-fg-muted leading-relaxed italic">
                  &ldquo;To be a Leader in IT Consulting &amp; Staffing and a Trusted Partner to our clients.&rdquo;
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-theme/60 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-accent-fg">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-fg uppercase tracking-wider">
                    Our Mission
                  </h3>
                </div>
                <p className="text-xs text-fg-muted leading-relaxed italic">
                  &ldquo;To help Clients get the best Talent in the industry and help them become better organizations.&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/who-we-are"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-on-accent bg-abis-blue hover:bg-abis-blue-hover transition-all duration-200 shadow-[0_4px_20px_rgba(32,109,247,0.35)]"
              >
                <span>Discover Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/business-practices"
                className="text-sm font-semibold text-fg-muted hover:text-fg transition-colors flex items-center gap-1.5"
              >
                <span>Our Business Practices</span>
                <ChevronRight className="w-4 h-4 text-accent-fg" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Pillar Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-surface border border-theme/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-accent-fg/10">
                <Zap className="w-24 h-24" />
              </div>
              <h3 className="text-lg font-bold text-fg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-abis-blue" />
                The ABIS Engagement Advantage
              </h3>
              <ul className="space-y-3.5 text-xs text-fg-muted">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-fg shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-fg block font-semibold">RPC Optimization:</strong> 
                    Streamlined sourcing, multi-tier vetting, and reduced time-to-hire across niche technical domains.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-fg shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-fg block font-semibold">Cross-Border Execution:</strong> 
                    Synchronized talent pipelines across Indian technical epicenters and US enterprise markets.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-fg block font-semibold">Deep Vertical Domain Focus:</strong> 
                    Deep expertise spanning semiconductors, VLSI, BFSI, enterprise cloud, and automotive systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-fg block font-semibold">Extended Partner Commitment:</strong> 
                    We function as a true consultative partner rather than a transactional vendor.
                  </span>
                </li>
              </ul>
            </div>

            {/* Client Footprint Badge */}
            <div className="p-5 rounded-2xl bg-fg/5 border border-theme/60 flex items-center justify-between text-xs text-fg-subtle">
              <div>
                <span className="text-fg-bright font-semibold block text-sm">Enterprise Collaboration</span>
                <span>Captive Units, R&amp;D Centers &amp; Global Technology Leaders</span>
              </div>
              <Link href="/services" className="text-accent-fg font-medium hover:underline shrink-0">
                Explore Services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
