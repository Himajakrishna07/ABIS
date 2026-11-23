import Link from "next/link";
import { ArrowLeft, Home, Search, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-6 tech-grid text-center">
      <div className="max-w-xl mx-auto space-y-6 p-8 rounded-3xl bg-[#08112C] border border-white/10 shadow-2xl">
        <div className="inline-block px-4 py-1.5 rounded-full bg-abis-blue/15 border border-abis-blue/30 text-abis-blue font-mono text-xs font-semibold">
          Error 404 &bull; Page Not Found
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Looking for Something Specific?
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed">
          The requested page could not be located on the Akshaya Business IT Solutions portal. It may have moved or been updated during our platform modernization.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-abis-blue hover:bg-abis-blue-hover transition-colors shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span>Browse Services</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
