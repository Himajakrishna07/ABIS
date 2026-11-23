import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Users2, Sparkles, Trophy } from "lucide-react";

export default function LifeTeaser() {
  return (
    <section className="py-24 bg-[#050A18] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-abis-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/brand/Life_AT_ABIS.webp"
                  alt="Life at ABIS culture and team"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                  Collaborative Workspace
                </div>
              </div>

              <div className="relative h-44 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/brand/ABIS_Office_02.jpg"
                  alt="ABIS office team collaboration"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                  High-Performance Culture
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="relative h-44 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/brand/ABIS_04.jpg"
                  alt="ABIS team discussion"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                  Learning &amp; Growth
                </div>
              </div>

              <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/brand/ABIS_Office.jpg"
                  alt="ABIS workspace environment"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                  Meritocracy in Action
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              <span>Employer of Choice</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Life at ABIS: Where{" "}
              <span className="text-gradient-cyan">Talent Thrives</span> &amp; Grows.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              We are a people-oriented organization where happy, energized employees drive our long-term client success. We foster a meritocratic environment that balances ambitious goals with continuous mentorship, professional empowerment, and genuine mutual respect.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#09112A] border border-white/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-abis-blue/20 text-abis-blue shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Culture of High Achievement
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We challenge each team member to push boundaries, take full ownership of client outcomes, and shine across high-impact consulting mandates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#09112A] border border-white/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Continuous Learning &amp; Upskilling
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    From emerging recruitment toolchains to deep technical sector research, we invest heavily in our people&apos;s holistic development.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/life-at-abis"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-abis-blue hover:bg-abis-blue-hover transition-all duration-200 shadow-[0_4px_20px_rgba(32,109,247,0.35)]"
              >
                <span>Explore Life at ABIS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
              >
                <span>View Career Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
