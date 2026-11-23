import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import {
  Heart,
  Trophy,
  Users2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Smile,
  Zap,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Life at ABIS | People-Oriented Culture & Employer of Choice",
  description:
    "Explore life, culture, and career growth at Akshaya Business IT Solutions. Where happy, energized people power sustained enterprise client success.",
};

const culturePillars = [
  {
    icon: Trophy,
    title: "Culture of High Achievement",
    desc: "We challenge each individual to push themselves to great heights, giving everyone demanding, high-visibility opportunities to shine on strategic client mandates.",
  },
  {
    icon: GraduationCap,
    title: "Constant Learning & Growth",
    desc: "We invest continuously in our team's professional development through hands-on technical bootcamps, client advisory coaching, and domain masterclasses.",
  },
  {
    icon: Users2,
    title: "Performance & Meritocracy",
    desc: "Recognition, promotions, and career acceleration at ABIS are earned purely through tangible client impact, leadership initiative, and peer collaboration.",
  },
  {
    icon: Smile,
    title: "Vibrant & Socially Responsible",
    desc: "We cultivate an open, employee-friendly environment where diverse perspectives are celebrated, psychological safety is upheld, and well-being matters.",
  },
];

const galleryPhotos = [
  {
    src: "/brand/Life_AT_ABIS.webp",
    alt: "ABIS collaborative office workspace",
    title: "Collaborative Team Ecosystem",
    subtitle: "Cross-functional teams solving complex client requirements",
    span: "col-span-1 md:col-span-2 row-span-2",
    height: "h-96 md:h-full",
  },
  {
    src: "/brand/ABIS_Office_02.jpg",
    alt: "ABIS corporate discussions",
    title: "Strategic Client Calibration",
    subtitle: "Consultants calibrating specialized technical benchmarks",
    span: "col-span-1",
    height: "h-64",
  },
  {
    src: "/brand/ABIS_04.jpg",
    alt: "ABIS professional development session",
    title: "Continuous Mentorship",
    subtitle: "Peer learning and capability development",
    span: "col-span-1",
    height: "h-64",
  },
  {
    src: "/brand/ABIS03.jpg",
    alt: "ABIS team workspace and workstations",
    title: "Focused Delivery Hub",
    subtitle: "Modern infrastructure in Hyderabad and Bengaluru",
    span: "col-span-1",
    height: "h-64",
  },
  {
    src: "/brand/ABIS_Office.jpg",
    alt: "ABIS corporate headquarters workspace",
    title: "Energized Workplace Culture",
    subtitle: "Building fruitful, rewarding long-term careers",
    span: "col-span-1",
    height: "h-64",
  },
];

export default function LifeAtAbisPage() {
  return (
    <div className="min-h-screen bg-[#050A18] text-white">
      {/* Header */}
      <PageHeader
        badge="Company Culture & Values"
        title="Being an Employer of Choice: We are a Great Place to Work."
        subtitle="Akshaya Business IT Solutions (ABIS) is a people-oriented company. We truly believe that happy and energized employees are the foundational key to our two-decade success."
        breadcrumbs={[{ label: "Life at ABIS" }]}
      />

      {/* Narrative Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              <span>People First Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Invested in Your Growth,{" "}
              <span className="text-gradient-cyan">Committed to Your Success.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              We are committed to attracting and retaining exceptional talent by following practices that ensure each team member builds a fruitful and rewarding career with us. We strive to create a vibrant and open environment that is employee-friendly, supportive, and socially responsible.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Our culture provides opportunities for constant learning and growth, grounded firmly in performance, fairness, and meritocracy. We challenge you to perform to the best of your ability — and provide the mentorship, tooling, and autonomy you need to excel.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-abis-blue hover:bg-abis-blue-hover transition-colors shadow-lg"
              >
                <span>Explore Open Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Connect with Our HR Team</span>
              </Link>
            </div>
          </div>

          {/* Core Commitments Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#091438] to-[#070D24] border border-white/15 shadow-2xl space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Our Two-Fold Commitment
              </span>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-abis-blue" />
                    Commitment to Our Team
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    &ldquo;We want the best people and we invest in your development. We challenge you to perform to the best of your ability.&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    Culture of High Achievement
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    &ldquo;We challenge you to push yourself to great heights. We give you challenging opportunities to shine.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Pillars Grid */}
      <section className="py-20 bg-[#040816] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-abis-blue">
              What Defines Us
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              The Four Pillars of Life at ABIS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#09122C] border border-white/10 hover:border-abis-blue/40 transition-all duration-300 space-y-4"
                >
                  <div className="p-3 rounded-xl bg-white/[0.04] text-abis-blue w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentic Photo Gallery Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            Real Moments &amp; Workspaces
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Inside the ABIS Workplace
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real corporate photography showcasing our high-energy workspaces across Hyderabad and Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group ${photo.span}`}
            >
              <div className={`relative w-full ${photo.height}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <h4 className="text-base font-bold text-white">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Client Logos */}
      <ClientLogoCarousel />

      {/* Bottom CTA */}
      <CtaBanner
        title="Ready to Build Your Career at ABIS?"
        subtitle="Explore our active openings across technical recruitment, account management, and enterprise technology consulting."
        primaryButtonText="View Career Openings"
        primaryButtonHref="/careers"
        secondaryButtonText="Send Spontaneous CV"
        secondaryButtonHref="/contact?type=career"
      />
    </div>
  );
}
