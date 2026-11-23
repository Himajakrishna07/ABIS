import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CredibilityBar from "@/components/CredibilityBar";
import CtaBanner from "@/components/CtaBanner";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import {
  Compass,
  Target,
  ShieldCheck,
  Globe2,
  Users2,
  CheckCircle2,
  ArrowRight,
  Building2,
  Layers,
  Sparkles,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Are | About Akshaya Business IT Solutions",
  description:
    "Discover the history, leadership vision, and business philosophy of Akshaya Business IT Solutions (ABIS). Over two decades of excellence partnering with Fortune 500s across India and the USA.",
};

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-[#050A18] text-white">
      {/* Header */}
      <PageHeader
        badge="Corporate Profile"
        title="Building Long-Standing Partnerships Through People & Technology."
        subtitle="Akshaya Business IT Solutions (ABIS) is an established end-to-end IT business solution provider with over two decades of demonstrated industry excellence across India and the United States."
        breadcrumbs={[{ label: "Who We Are" }]}
      />

      {/* Credibility Stats */}
      <CredibilityBar />

      {/* Narrative Section with Photo */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-abis-blue/10 border border-abis-blue/30 text-abis-blue text-xs font-semibold uppercase tracking-wider">
              Our Heritage &amp; Foundation
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Two Decades of Empowering{" "}
              <span className="text-gradient-blue">Enterprise Innovation.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Every business requires solutions customized to its specific operational and scaling needs. Akshaya Business IT Solutions (ABIS) was founded on the conviction that high-performing technology teams require more than superficial placement — they require an extended strategic partner who understands deep technical domain architecture and organizational culture.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Over the last two decades, we have continuously collaborated with leading Fortune 500 clients, multinational captive units, specialized R&amp;D engineering centers, and enterprise software product companies across India and North America.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Our experience handling complex recruitment enables us to navigate the intricate challenges that arise across the Recruitment Process Cycle (RPC) — constantly optimizing velocity, technical precision, and post-joining retention for our client partners.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-abis-blue" />
                <span>Extended Arm Engagement Model</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Cross-Border Execution (India &amp; USA)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#091330] p-3">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/brand/Life_AT_ABIS.webp"
                  alt="ABIS corporate environment and leadership team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Akshaya Business IT Solutions
                  </span>
                  <p className="text-base font-bold text-white mt-1">
                    Delivering business momentum and talent excellence since 2000s.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Vision & Mission */}
      <section className="py-20 bg-[#040816] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-abis-blue">
              Guiding Institutional Principles
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Our Vision &amp; Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              The fundamental purpose that drives our consultants, delivery centers, and client engagements every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#09122C] border border-abis-blue/30 relative overflow-hidden space-y-6">
              <div className="p-4 rounded-2xl bg-abis-blue/20 text-abis-blue w-fit">
                <Compass className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-abis-blue">
                  Official Statement
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Our Vision</h3>
              </div>
              <blockquote className="text-lg sm:text-xl text-slate-200 font-medium italic border-l-2 border-abis-blue pl-4 leading-relaxed">
                &ldquo;To be a Leader in IT Consulting &amp; Staffing and a Trusted Partner to our clients.&rdquo;
              </blockquote>
              <p className="text-xs text-slate-400 leading-relaxed">
                We aspire to set the benchmark for talent advisory and workforce agility across high-complexity technology verticals, becoming an indispensable partner in our clients&apos; growth stories.
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#09122C] border border-cyan-500/30 relative overflow-hidden space-y-6">
              <div className="p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 w-fit">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Official Statement
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Our Mission</h3>
              </div>
              <blockquote className="text-lg sm:text-xl text-slate-200 font-medium italic border-l-2 border-cyan-400 pl-4 leading-relaxed">
                &ldquo;To help Clients get the best Talent in the industry and help them become better organizations.&rdquo;
              </blockquote>
              <p className="text-xs text-slate-400 leading-relaxed">
                We align candidates not just with immediate technical parameters, but with long-term strategic potential — strengthening our clients&apos; internal capabilities, culture, and market competitiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Philosophy & Client Partnership Approach */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-abis-blue">
            The Extended Partner Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Business Philosophy
          </h2>
          <p className="text-sm text-slate-300">
            Why leading technology corporations rely on ABIS for long-term human capital and consulting support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#081028] border border-white/10 space-y-4">
            <div className="p-3 rounded-xl bg-white/[0.04] text-abis-blue w-fit">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Extended Strategic Partner
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We do not act as an impersonal external broker. We integrate seamlessly into our clients&apos; internal talent acquisition frameworks, aligning closely with hiring managers to mirror corporate culture and values.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#081028] border border-white/10 space-y-4">
            <div className="p-3 rounded-xl bg-white/[0.04] text-cyan-400 w-fit">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Configurable Delivery
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No two technology enterprises face identical hiring constraints. Our engagement models range from dedicated RPO teams and executive retained search to agile contract engineering squads and corporate training.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#081028] border border-white/10 space-y-4">
            <div className="p-3 rounded-xl bg-white/[0.04] text-emerald-400 w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              RPC Mastery &amp; Ethics
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We adhere strictly to meritocratic vetting, verified credentials, and rigorous ethical compliance. Our proprietary RPC optimization methods minimize candidate fallouts and boost first-year employee retention.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Client Logos */}
      <ClientLogoCarousel />

      {/* Bottom CTA */}
      <CtaBanner
        title="Ready to Partner with an Established IT Solutions Leader?"
        subtitle="Connect with our corporate leadership team to explore how ABIS can strengthen your talent and technology capabilities."
        primaryButtonText="Schedule an Executive Meeting"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
