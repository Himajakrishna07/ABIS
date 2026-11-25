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
    <section className="relative py-16 lg:py-24 bg-bg tech-grid border-b border-theme/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-abis-blue/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-fg-subtle mb-6">
          <Link href="/" className="hover:text-fg transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-fg-subtle" />
              {item.href ? (
                <Link href={item.href} className="hover:text-fg transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-accent-fg font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Badge & Title */}
        <div className="max-w-3xl space-y-4">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-abis-blue/10 border border-abis-blue/30 text-accent-fg text-xs font-semibold uppercase tracking-wider">
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
