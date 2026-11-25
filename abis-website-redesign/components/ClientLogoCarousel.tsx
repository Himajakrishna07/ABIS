import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const clientLogosRow1 = [
  { name: "IBM", src: "/brand/New_clients_0019_ibm.jpg" },
  { name: "Deloitte", src: "/brand/New_clients_0017_2560px-Deloitte.jpg" },
  { name: "Siemens", src: "/brand/New_clients_0008_siemens-logo-default.jpg" },
  { name: "Tata Elxsi", src: "/brand/New_clients_0005_tata_elxi.jpg" },
  { name: "Cyient Ltd", src: "/brand/New_clients_0021_Cyient-Ltd-Logo.jpg" },
  { name: "Zensar Technologies", src: "/brand/New_clients_0000_Zensar.jpg" },
  { name: "Mouritech", src: "/brand/New_clients_0011_Mouritech-R-Logo.jpg" },
  { name: "Mentor Graphics", src: "/brand/New_clients_0012_Mentor_Graphics-Logo.jpg" },
  { name: "Qentelli", src: "/brand/New_clients_0010_qentelli-logo.jpg" },
  { name: "Acuvate", src: "/brand/New_clients_0016_AcuvateLogo_400px.jpg" },
  { name: "HTC Global Services", src: "/brand/New_clients_0015_htc-logo_156-px-1.jpg" },
  { name: "Maveric Systems", src: "/brand/New_clients_0018_maveric-logo-updated.jpg" },
];

const clientLogosRow2 = [
  { name: "Vimta Labs", src: "/brand/New_clients_0002_Vimta.jpg" },
  { name: "Yethi Consulting", src: "/brand/New_clients_0001_yethi.jpg" },
  { name: "SmartDrive / Omnitracs", src: "/brand/New_clients_0020_Smart-Drive-Omnitracs-Logo-RGB_80.jpg" },
  { name: "VeriPark", src: "/brand/New_clients_0003_veripark_logo.jpg" },
  { name: "Sevitech (UST)", src: "/brand/New_clients_0009_sevitech_UST.jpg" },
  { name: "IndiaMART", src: "/brand/New_clients_0014_indiamart-logo-icon.jpg" },
  { name: "Siemon", src: "/brand/New_clients_0007_SIEMON_logo-2x.jpg" },
  { name: "GE Mills", src: "/brand/New_clients_0002_GE_Mills.jpg" },
  { name: "Ray", src: "/brand/New_clients_0017_ray-textlogo.jpg" },
  { name: "Naarsoft", src: "/brand/New_clients_0002_Naarsoft.jpg" },
  { name: "TechV", src: "/brand/New_clients_0004_techvLogo.jpg" },
  { name: "SkillAngels", src: "/brand/New_clients_0006_skillangeks_logo.jpg" },
];

export default function ClientLogoCarousel() {
  return (
    <section className="py-20 bg-[#040816] border-y border-white/10 relative overflow-hidden">
      {/* Soft gradient edge fade masks */}
      <div className="client-carousel-mask-left absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#040816] to-transparent z-20 pointer-events-none" />
      <div className="client-carousel-mask-right absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#040816] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-abis-blue" />
          <span>Verified Client Partnerships</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Trusted by Industry Leaders &amp; Global Enterprises
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl mx-auto">
          Over our 20+ year journey, we have had the privilege of powering workforce and technology initiatives for renowned Fortune 500 multinationals and market champions.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="flex overflow-hidden py-3 select-none group">
        <div className="flex shrink-0 items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {[...clientLogosRow1, ...clientLogosRow1].map((logo, idx) => (
            <div
              key={idx}
              className="client-logo-card flex items-center justify-center h-20 w-44 px-5 rounded-2xl bg-white/95 border border-white/20 shadow-md hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} client logo`}
                width={140}
                height={55}
                className="max-h-12 w-auto object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse direction) */}
      <div className="flex overflow-hidden py-3 select-none group mt-3">
        <div className="flex shrink-0 items-center gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...clientLogosRow2, ...clientLogosRow2].map((logo, idx) => (
            <div
              key={idx}
              className="client-logo-card flex items-center justify-center h-20 w-44 px-5 rounded-2xl bg-white/95 border border-white/20 shadow-md hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} client logo`}
                width={140}
                height={55}
                className="max-h-12 w-auto object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
