"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  ChevronDown,
  Menu,
  X,
  Users,
  Briefcase,
  Search,
  GraduationCap,
  HeartHandshake,
  Code2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const servicesList = [
  {
    title: "Permanent Recruitment",
    href: "/services/permanent-recruitment",
    desc: "End-to-end recruitment cycle mastery for specialized roles",
    icon: Users,
    color: "text-accent-fg",
  },
  {
    title: "Contract Staffing",
    href: "/services/contract-staffing",
    desc: "Agile, scalable tech talent for rapid project delivery",
    icon: Briefcase,
    color: "text-accent-fg",
  },
  {
    title: "Executive Search & RPO",
    href: "/services/executive-search-rpo",
    desc: "C-suite leadership placement and outsourced recruitment pipelines",
    icon: Search,
    color: "text-indigo-400",
  },
  {
    title: "Corporate Training",
    href: "/services/corporate-training",
    desc: "Upskilling and capability building for enterprise teams",
    icon: GraduationCap,
    color: "text-emerald-700 dark:text-emerald-400",
  },
  {
    title: "HR Services",
    href: "/services/hr-services",
    desc: "Strategic HR advisory, org design, and leadership transformation",
    icon: HeartHandshake,
    color: "text-amber-400",
  },
  {
    title: "Application Development",
    href: "/services/application-development",
    desc: "Custom enterprise software engineering and support",
    icon: Code2,
    color: "text-sky-400",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top subtle utility strip */}
      <div className="bg-bg-alt border-b border-theme/60 text-xs text-fg-subtle hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-fg-bright transition-colors">
              <MapPin className="w-3.5 h-3.5 text-accent-fg" />
              Hyderabad &bull; Bengaluru &bull; New Jersey (USA)
            </span>
            <span className="flex items-center gap-1.5 hover:text-fg-bright transition-colors">
              <Phone className="w-3.5 h-3.5 text-accent-fg" />
              040-48546345
            </span>
            <span className="flex items-center gap-1.5 hover:text-fg-bright transition-colors">
              <Mail className="w-3.5 h-3.5 text-accent-fg" />
              hr@akshayaitsolutions.com
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium tracking-wide">
            <span className="px-2 py-0.5 rounded-full bg-abis-blue/10 border border-abis-blue/30 text-accent-fg">
              20+ Years Industry Excellence
            </span>
            <span className="text-fg-subtle">Trusted by Fortune 500 & Leading MNCs</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-alt/95 backdrop-blur-md border-b border-theme/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-3.5"
            : "bg-bg-alt/80 backdrop-blur-sm border-b border-theme/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="white" />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/")
                  ? "text-accent-fg bg-abis-blue/15 border border-abis-blue/30 font-semibold shadow-[0_0_15px_rgba(32,109,247,0.15)]"
                  : "text-fg-bright hover:text-fg hover:bg-fg/5"
              }`}
            >
              Home
            </Link>

            <Link
              href="/who-we-are"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/who-we-are")
                  ? "text-accent-fg bg-abis-blue/15 border border-abis-blue/30 font-semibold"
                  : "text-fg-bright hover:text-fg hover:bg-fg/5"
              }`}
            >
              Who We Are
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname.startsWith("/services")
                    ? "text-accent-fg bg-abis-blue/15 border border-abis-blue/30 font-semibold"
                    : "text-fg-bright hover:text-fg hover:bg-fg/5"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-accent-fg" : "text-fg-subtle"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[580px] bg-surface border border-theme/60 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-4 backdrop-blur-2xl animate-fade-in z-50">
                  <div className="grid grid-cols-2 gap-2">
                    {servicesList.map((svc) => {
                      const Icon = svc.icon;
                      return (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className="group p-3 rounded-xl hover:bg-fg/5 border border-transparent hover:border-theme/60 transition-all flex items-start gap-3"
                        >
                          <div className="p-2.5 rounded-lg bg-fg/5 group-hover:bg-abis-blue/20 transition-colors">
                            <Icon className={`w-5 h-5 ${svc.color}`} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-fg group-hover:text-accent-fg transition-colors flex items-center gap-1">
                              {svc.title}
                            </div>
                            <p className="text-xs text-fg-subtle line-clamp-2 mt-0.5 leading-relaxed">
                              {svc.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 pt-3 border-t border-theme/60 flex items-center justify-between px-2 text-xs">
                    <span className="text-fg-subtle">Looking for all consulting capabilities?</span>
                    <Link
                      href="/services"
                      className="text-accent-fg hover:text-accent-fg font-semibold flex items-center gap-1 hover:gap-1.5 transition-all"
                    >
                      All Services Directory <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/business-practices"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/business-practices")
                  ? "text-accent-fg bg-abis-blue/15 border border-abis-blue/30 font-semibold"
                  : "text-fg-bright hover:text-fg hover:bg-fg/5"
              }`}
            >
              Business Practices
            </Link>

            <Link
              href="/life-at-abis"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/life-at-abis")
                  ? "text-accent-fg bg-abis-blue/15 border border-abis-blue/30 font-semibold"
                  : "text-fg-bright hover:text-fg hover:bg-fg/5"
              }`}
            >
              Life at ABIS
            </Link>

            <Link
              href="/careers"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/careers")
                  ? "text-accent-fg bg-abis-blue/15 border border-abis-blue/30 font-semibold"
                  : "text-fg-bright hover:text-fg hover:bg-fg/5"
              }`}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/contact")
                  ? "text-accent-fg bg-abis-blue/15 border border-abis-blue/30 font-semibold"
                  : "text-fg-bright hover:text-fg hover:bg-fg/5"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-on-accent bg-abis-blue hover:bg-abis-blue-hover transition-all duration-300 shadow-[0_4px_20px_rgba(32,109,247,0.35)] hover:shadow-[0_6px_25px_rgba(32,109,247,0.55)] active:scale-[0.98]"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-fg-muted hover:text-fg hover:bg-fg/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-bg-alt border-b border-theme/60 px-6 py-6 animate-fade-in max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className={`px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive("/") ? "bg-abis-blue/15 text-accent-fg border border-abis-blue/30" : "text-fg-bright hover:text-fg hover:bg-fg/5"
                }`}
              >
                Home
              </Link>
              <Link
                href="/who-we-are"
                className={`px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive("/who-we-are")
                    ? "bg-abis-blue/15 text-accent-fg border border-abis-blue/30"
                    : "text-fg-bright hover:text-fg hover:bg-fg/5"
                }`}
              >
                Who We Are
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border border-theme/60 rounded-xl overflow-hidden my-1">
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-fg bg-fg/5"
                >
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-accent-fg" />
                    Services
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180 text-accent-fg" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="px-3 py-2 bg-black/30 flex flex-col gap-1 border-t border-theme/60">
                    <Link
                      href="/services"
                      className="px-3 py-2 text-sm font-semibold text-accent-fg flex items-center justify-between hover:bg-fg/5 rounded-lg"
                    >
                      <span>Overview Directory</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {servicesList.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="px-3 py-2 text-sm text-fg-muted hover:text-fg hover:bg-fg/5 rounded-lg"
                      >
                        {svc.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/business-practices"
                className={`px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive("/business-practices")
                    ? "bg-abis-blue/15 text-accent-fg border border-abis-blue/30"
                    : "text-fg-bright hover:text-fg hover:bg-fg/5"
                }`}
              >
                Business Practices
              </Link>

              <Link
                href="/life-at-abis"
                className={`px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive("/life-at-abis")
                    ? "bg-abis-blue/15 text-accent-fg border border-abis-blue/30"
                    : "text-fg-bright hover:text-fg hover:bg-fg/5"
                }`}
              >
                Life at ABIS
              </Link>

              <Link
                href="/careers"
                className={`px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive("/careers")
                    ? "bg-abis-blue/15 text-accent-fg border border-abis-blue/30"
                    : "text-fg-bright hover:text-fg hover:bg-fg/5"
                }`}
              >
                Careers
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive("/contact")
                    ? "bg-abis-blue/15 text-accent-fg border border-abis-blue/30"
                    : "text-fg-bright hover:text-fg hover:bg-fg/5"
                }`}
              >
                Contact Us
              </Link>

              <div className="pt-4 border-t border-theme/60 mt-2">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-on-accent bg-abis-blue shadow-lg"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
