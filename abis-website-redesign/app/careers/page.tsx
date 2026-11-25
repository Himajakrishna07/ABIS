import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CareerPortal from "@/components/CareerPortal";
import CtaBanner from "@/components/CtaBanner";
import { Mail, ShieldCheck, Heart, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Current Openings | Join the ABIS Team",
  description:
    "Explore career opportunities at Akshaya Business IT Solutions (ABIS). Join our people-oriented team across Hyderabad, Bengaluru, and the USA.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Header */}
      <PageHeader
        badge="Join Our Mission"
        title="Shape the Future of Business, Talent &amp; Technology."
        subtitle="We are looking for ambitious, energized professionals who thrive in a culture of high achievement, continuous learning, and meritocracy."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Main Careers Container */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Job Listing & Application Flow (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <CareerPortal />
          </div>

          {/* Sidebar: Candidate Information & Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Spontaneous Application Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-surface to-bg-alt border border-abis-blue/30 shadow-xl space-y-4">
              <div className="p-3 rounded-2xl bg-abis-blue/20 text-accent-fg w-fit">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-fg">
                Don&apos;t See an Exact Match?
              </h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                We are always eager to meet high-caliber recruitment consultants, technical recruiters, and client partners. Send your resume directly to our talent acquisition desk.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:hr@akshayaitsolutions.com?subject=Spontaneous%20Job%20Application%20-%20ABIS"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs text-on-accent bg-abis-blue hover:bg-abis-blue-hover transition-colors shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Resume to hr@akshayaitsolutions.com</span>
                </a>
              </div>
            </div>

            {/* Why Work at ABIS Box */}
            <div className="p-8 rounded-3xl bg-surface border border-theme/60 space-y-4">
              <h4 className="text-sm font-bold text-fg uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-fg" />
                The ABIS Candidate Promise
              </h4>
              <ul className="space-y-3 text-xs text-fg-muted leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent-fg shrink-0 mt-0.5" />
                  <span>Meritocratic compensation benchmarks with performance rewards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Empathetic, collaborative, and socially responsible leadership</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-accent-fg shrink-0 mt-0.5" />
                  <span>Exposure to top-tier Fortune 500 &amp; global MNC client accounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        title="Ready to Build a Rewarding Career?"
        subtitle="Join our teams in Hyderabad, Bengaluru, or our North American operations."
        primaryButtonText="Explore Openings Above"
        primaryButtonHref="#top"
        secondaryButtonText="Learn About Life at ABIS"
        secondaryButtonHref="/life-at-abis"
      />
    </div>
  );
}
