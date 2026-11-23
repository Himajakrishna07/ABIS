import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative py-16 lg:py-24 bg-[#050A18] tech-grid border-b border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-abis-blue/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {item.href ? (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-abis-blue font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Badge & Title */}
        <div className="max-w-3xl space-y-4">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-abis-blue/10 border border-abis-blue/30 text-abis-blue text-xs font-semibold uppercase tracking-wider">
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
