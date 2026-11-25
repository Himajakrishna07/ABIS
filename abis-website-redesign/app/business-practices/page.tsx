import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CredibilityBar from "@/components/CredibilityBar";
import CtaBanner from "@/components/CtaBanner";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import {
  ShieldCheck,
  CheckCircle2,
  Users2,
  GitPullRequest,
  Lock,
  Award,
  Target,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Practices & Professional Standards | ABIS Delivery Framework",
  description:
    "Explore the professional standards, client engagement approach, and Recruitment Process Cycle (RPC) delivery governance of Akshaya Business IT Solutions.",
};

const practices = [
  {
    icon: Users2,
    title: "The Extended Partner Engagement Model",
    desc: "We do not believe in transactional recruiting. We integrate closely into our clients' organizational structure, developing an in-depth understanding of technical benchmarks, project deliverables, and internal team culture.",
    points: [
      "Dedicated account managers with direct industry domain experience",
      "Regular client calibration sessions and feedback alignment",
      "Transparent reporting on pipeline health and market feedback",
      "Mutual accountability anchored by service level agreements (SLAs)",
    ],
  },
  {
    icon: GitPullRequest,
    title: "Recruitment Process Cycle (RPC) Governance",
    desc: "Having managed complex hiring cycles for over two decades, we have established systematic controls at every transition point in the RPC to minimize candidate fallout, accelerate velocity, and maximize talent fit.",
    points: [
      "Rigorous role discovery & competency matrix development",
      "Comprehensive multi-stage technical and behavioral pre-screening",
      "Offer negotiation governance aligned with live market compensation bands",
      "Proactive notice period engagement and joining transition assurance",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Commitment & Candidate Integrity",
    desc: "Our vetting protocols go beyond matching keywords on resumes. We conduct thorough due diligence to verify genuine experience, track records, and professional references.",
    points: [
      "Detailed resume validation against verifiable project accomplishments",
      "Structured reference verifications with past supervisors and mentors",
      "Comprehensive compliance with statutory documentation and identification",
      "Strict zero-tolerance policy against exaggerated claims or dual employment",
    ],
  },
  {
    icon: Lock,
    title: "Confidentiality & Information Security",
    desc: "We handle sensitive client initiatives, unannounced product lines, executive vacancies, and proprietary technical stacks under the strictest standards of discretion.",
    points: [
      "Rigorous non-disclosure agreements (NDAs) covering all stakeholder data",
      "Confidential executive search protocols protecting corporate brand reputation",
      "Secure data handling for candidate personal identification and compensation data",
      "Compliance with international data protection and privacy expectations",
    ],
  },
];

export default function BusinessPracticesPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Header */}
      <PageHeader
        badge="Professional Standards"
        title="Delivery Excellence, Integrity &amp; Client Commitment."
        subtitle="The operational frameworks, governance standards, and ethical principles that have guided our client partnerships for more than two decades."
        breadcrumbs={[{ label: "Business Practices" }]}
      />

      {/* Credibility */}
      <CredibilityBar />

      {/* Core Philosophy Banner */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-surface to-bg-alt border border-abis-blue/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-fg">
              Foundational Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-fg">
              &ldquo;We believe in maintaining long-standing relationships with our clients and working as an Extended Partner.&rdquo;
            </h2>
            <p className="text-sm text-fg-muted leading-relaxed">
              In an industry often characterized by speed at the expense of substance, ABIS has earned the sustained trust of Fortune 500 multinationals and leading technology employers by prioritizing precision, unbending professional ethics, and lasting relationship value.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Practices Grid */}
      <section className="py-12 max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practices.map((practice, i) => {
            const Icon = practice.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-surface border border-theme/60 hover:border-abis-blue/40 transition-all duration-300 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-abis-blue/20 text-accent-fg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-fg">
                    {practice.title}
                  </h3>
                </div>

                <p className="text-sm text-fg-muted leading-relaxed">
                  {practice.desc}
                </p>

                <div className="pt-2 border-t border-theme/60 space-y-2.5">
                  {practice.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs text-fg-muted">
                      <CheckCircle2 className="w-4 h-4 text-accent-fg shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RPC Methodology Deep Dive */}
      <section className="py-20 bg-bg border-y border-theme/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-fg">
              20+ Years RPC Mastery
            </span>
            <h2 className="text-3xl font-extrabold text-fg">
              The Recruitment Process Cycle (RPC) Architecture
            </h2>
            <p className="text-xs sm:text-sm text-fg-subtle">
              How ABIS actively optimizes each operational milestone to guarantee high-velocity, high-retention talent delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                name: "Discovery & Calibration",
                detail: "Aligning deep technical specifications, engineering environment nuances, and cultural dynamics with hiring leads.",
              },
              {
                step: "02",
                name: "Intelligent Sourcing",
                detail: "Deploying multi-channel mapping across our proprietary two-decade database, passive talent pools, and referral networks.",
              },
              {
                step: "03",
                name: "Multi-Tier Screening",
                detail: "Pre-evaluating technical competencies, architectural problem-solving depth, communication fluency, and compensation expectations.",
              },
              {
                step: "04",
                name: "Joining & Retention Assurance",
                detail: "Guiding candidates through resignation transitions, counter-offer resistance, and continuous 90-day onboarding engagement.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface border border-theme/60 space-y-3 relative group hover:border-abis-blue/50 transition-colors"
              >
                <span className="text-3xl font-extrabold text-accent-fg/40 font-mono group-hover:text-accent-fg transition-colors">
                  {st.step}
                </span>
                <h4 className="text-base font-bold text-fg">
                  {st.name}
                </h4>
                <p className="text-xs text-fg-subtle leading-relaxed">
                  {st.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogoCarousel />

      {/* CTA Banner */}
      <CtaBanner
        title="Experience the ABIS Delivery Standard"
        subtitle="Partner with an IT consulting organization that values accountability, precision, and sustained business momentum."
        primaryButtonText="Discuss a Partnership"
        primaryButtonHref="/contact"
      />
    </div>
  );
}
