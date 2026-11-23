import {
  Cpu,
  Layers,
  Landmark,
  Radio,
  Building,
  Plane,
  Car,
  ShoppingBag,
  GraduationCap,
  UtensilsCrossed,
  Wrench,
  Package,
  Film,
  Flame,
  Stethoscope,
  Wifi,
  Sparkles,
} from "lucide-react";

const industries = [
  { name: "Information Technology & ITES", icon: Cpu, desc: "Cloud, SaaS, product engineering & consulting" },
  { name: "Semiconductor, VLSI & EDA", icon: Layers, desc: "Chip design, verification, DFT, physical design & FPGA" },
  { name: "Embedded Systems & IoT", icon: Radio, desc: "Firmware, microcontrollers, RTOS & smart connected devices" },
  { name: "BFSI & Fintech", icon: Landmark, desc: "Core banking, digital payments, insurance & financial compliance" },
  { name: "Aerospace & Aviation", icon: Plane, desc: "Avionics systems, flight software & aerospace engineering" },
  { name: "Automotive & Mobility", icon: Car, desc: "Connected vehicles, EV software, ADAS & infotainment systems" },
  { name: "Telecommunications & 5G", icon: Wifi, desc: "Wireless protocols, cellular infrastructure & telecom software" },
  { name: "Life Sciences, Pharma & Healthcare", icon: Stethoscope, desc: "Clinical data systems, bio-informatics & med-tech platforms" },
  { name: "E-Commerce & Digital Commerce", icon: ShoppingBag, desc: "Omnichannel retail platforms, logistics & payment gateways" },
  { name: "Retail & Consumer Durables", icon: Package, desc: "Supply chain, POS solutions & consumer appliances" },
  { name: "Industrial & Infrastructure", icon: Building, desc: "Smart grid, construction tech & civil infrastructure IT" },
  { name: "Oil & Gas, Energy", icon: Flame, desc: "SCADA systems, exploration analytics & energy efficiency" },
  { name: "Engineering & R&D Services", icon: Wrench, desc: "CAD/CAM, simulation, mechanical engineering & prototyping" },
  { name: "Media & Entertainment", icon: Film, desc: "Streaming platforms, digital content delivery & VFX tech" },
  { name: "Education & EdTech", icon: GraduationCap, desc: "Digital learning platforms, LMS & educational technology" },
  { name: "FMCG & Fast-Moving Goods", icon: Package, desc: "Distribution software, automated inventory & analytics" },
];

export default function IndustryEcosystem() {
  return (
    <section className="py-24 bg-[#050A18] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cross-Vertical Domain Mastery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industries We <span className="text-gradient-cyan">Serve &amp; Empower.</span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            From high-complexity semiconductor and embedded architectures to enterprise BFSI and cloud software, our vertical specialization guarantees immediate technical context and alignment.
          </p>
        </div>

        {/* Dynamic Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-[#09112A] hover:bg-[#0E1B42] border border-white/5 hover:border-abis-blue/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-white/[0.04] text-abis-blue group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors w-fit mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-white transition-colors mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Domain-Focused Sourcing:</strong> Each industry vertical is supported by dedicated talent advisors who understand the specific tooling, regulatory compliance, and technical jargon required for zero-ramp execution.
          </p>
        </div>
      </div>
    </section>
  );
}
