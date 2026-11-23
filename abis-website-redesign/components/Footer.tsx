import Link from "next/link";
import Logo from "./Logo";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Building2,
  Users2,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03060F] border-t border-white/10 text-slate-400 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-abis-blue/10 blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="white" width={190} height={50} />
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Akshaya Business IT Solutions (ABIS) is an established end-to-end IT business solution provider. For over two decades, we have empowered top MNCs and Fortune 500 enterprises with intelligent talent solutions, workforce expertise, and technology-driven services across India and the United States.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-abis-blue" />
                <span>20+ Years Track Record</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>India & USA Operations</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-abis-blue" />
              Specialized Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/permanent-recruitment"
                  className="hover:text-white transition-colors"
                >
                  Permanent Recruitment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/contract-staffing"
                  className="hover:text-white transition-colors"
                >
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-search-rpo"
                  className="hover:text-white transition-colors"
                >
                  Executive Search & RPO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-training"
                  className="hover:text-white transition-colors"
                >
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hr-services"
                  className="hover:text-white transition-colors"
                >
                  HR Services & Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/application-development"
                  className="hover:text-white transition-colors"
                >
                  Application Development
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-abis-blue hover:text-sky-300 font-medium inline-flex items-center gap-1"
                >
                  View All Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/who-we-are" className="hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/business-practices" className="hover:text-white transition-colors">
                  Business Practices
                </Link>
              </li>
              <li>
                <Link href="/life-at-abis" className="hover:text-white transition-colors">
                  Life at ABIS
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers & Openings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Global Presence
            </h3>
            <div className="space-y-4 text-xs leading-relaxed text-slate-300">
              <div>
                <p className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-abis-blue" />
                  Corporate Office (Hyderabad)
                </p>
                <p className="text-slate-400">
                  8th Floor, Tower 01, Vasavi Sky City, Gachibowli Cir, Telecom Nagar, Hyderabad, Telangana 500032.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  Bengaluru Branch
                </p>
                <p className="text-slate-400">
                  Vayuhu, 25 Kalpana Chawla Road, Sanjayanagara, Bengaluru, Karnataka 560094.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
                  USA Location
                </p>
                <p className="text-slate-400">
                  51 Cragwood Rd #301, South Plainfield, NJ 07080, USA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Banner & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-abis-blue" />
              <span>040-48546345</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-abis-blue" />
              <span>hr@akshayaitsolutions.com</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Akshaya Business IT Solutions (ABIS). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
