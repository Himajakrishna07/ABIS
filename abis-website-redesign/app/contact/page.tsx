import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Globe2,
  Briefcase,
  Users2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Offices in Hyderabad, Bengaluru & USA",
  description:
    "Get in touch with Akshaya Business IT Solutions (ABIS). Connect with our enterprise consulting teams across Hyderabad, Bengaluru, and New Jersey (USA).",
};

const officeLocations = [
  {
    type: "Registered & Corporate Headquarters",
    city: "Hyderabad, Telangana",
    address:
      "8th Floor, Tower 01, Vasavi Sky City, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032.",
    landmark: "Vasavi Sky City, Gachibowli Circle",
    phone: "040-48546345",
    email: "hr@akshayaitsolutions.com",
    badge: "Global Corporate HQ",
    color: "border-abis-blue/40",
  },
  {
    type: "Branch Office",
    city: "Bengaluru, Karnataka",
    address:
      "Vayuhu, 25 Kalpana Chawla Road, near State Bank of India, Bhoopasandra, New Extension, Central Excise Layout, Sanjayanagara, Bengaluru, Karnataka 560094.",
    landmark: "Near State Bank of India, Sanjayanagara",
    phone: "040-48546345",
    email: "hr@akshayaitsolutions.com",
    badge: "Technology Hub",
    color: "border-cyan-500/40",
  },
  {
    type: "North America Office",
    city: "South Plainfield, New Jersey",
    address: "51 Cragwood Rd #301, South Plainfield, NJ 07080, United States.",
    landmark: "South Plainfield Corporate Center",
    phone: "040-48546345",
    email: "hr@akshayaitsolutions.com",
    badge: "USA Operations",
    color: "border-indigo-500/40",
  },
];

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { service?: string; type?: string };
}) {
  const initialService = searchParams?.service || "";

  return (
    <div className="min-h-screen bg-[#050A18] text-white">
      {/* Header */}
      <PageHeader
        badge="Connect With ABIS"
        title="We Believe in Maintaining Long-Standing Client Relationships."
        subtitle="Work with us as an Extended Partner. Reach out to discuss technical staffing, permanent recruitment, corporate learning, or application support."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Main Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <ContactForm initialService={initialService} />

            {/* Career Enquiries Separation Note */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Looking for Career Opportunities?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To ensure rapid processing of job applications, please use our dedicated{" "}
                  <a href="/careers" className="text-abis-blue hover:underline font-semibold">
                    Careers Portal
                  </a>{" "}
                  to apply directly for verified openings, or send your CV directly to{" "}
                  <a
                    href="mailto:hr@akshayaitsolutions.com"
                    className="text-cyan-400 hover:underline font-mono"
                  >
                    hr@akshayaitsolutions.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Office Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-abis-blue">
                Verified Physical Presence
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Our Office Locations
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Operating across key technology centers in India and North America.
              </p>
            </div>

            <div className="space-y-4">
              {officeLocations.map((office, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-3xl bg-[#09122C] border ${office.color} shadow-xl space-y-4 relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      {office.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/10 text-white">
                      {office.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-abis-blue" />
                      {office.city}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-abis-blue" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Summary Card */}
            <div className="p-6 rounded-3xl bg-[#081028] border border-white/10 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-abis-blue" />
                Operating Hours &amp; Response SLA
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our delivery teams operate across Indian Standard Time (IST) and Eastern Standard Time (EST) business hours. Client enquiries submitted through the form are typically acknowledged within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
