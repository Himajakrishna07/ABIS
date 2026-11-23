import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CtaBanner({
  title = "Let's Build Something Exceptional Together.",
  subtitle = "Whether you need the right talent, strategic workforce solutions or technology expertise, ABIS is ready to help you accelerate your business momentum.",
  primaryButtonText = "Discuss Your Requirements",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Contact Our Team",
  secondaryButtonHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-20 bg-[#040816] relative overflow-hidden">
      {/* Background glow and subtle mesh */}
      <div className="absolute inset-0 tech-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-abis-blue/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#091438] to-[#070D24] border border-white/15 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base text-white bg-abis-blue hover:bg-abis-blue-hover transition-all duration-300 shadow-[0_10px_35px_-5px_rgba(32,109,247,0.5)] hover:shadow-[0_15px_45px_-5px_rgba(32,109,247,0.7)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={secondaryButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>{secondaryButtonText}</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>Corporate Head Office: Hyderabad, India</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Bengaluru Branch</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>USA Office: New Jersey</span>
          </div>
        </div>
      </div>
    </section>
  );
}
