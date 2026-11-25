import { ShieldCheck, Users, Cpu, Settings2, FastForward, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Two Decades of Proven Industry Excellence",
    description:
      "Since the early 2000s, ABIS has steered enterprise clients through evolving technology paradigms and workforce dynamics, delivering uncompromised quality across every recruitment engagement.",
  },
  {
    icon: Users,
    title: "Enduring, Trusted Client Partnerships",
    description:
      "We operate as an integrated extension of our clients' human capital and engineering teams. Our relationships are built on multi-year delivery trust, transparency, and accountability.",
  },
  {
    icon: Cpu,
    title: "Deep Technical & Vertical Specialization",
    description:
      "Our talent consultants possess specialized domain expertise across semiconductors, VLSI, embedded software, cloud architectures, BFSI fintech, and industrial engineering.",
  },
  {
    icon: Settings2,
    title: "Configurable & Adaptive Delivery Models",
    description:
      "Whether you require high-volume contract staffing for a release cycle, discreet executive leadership placement, or enterprise-wide RPO, our models flex to your specific organizational constraints.",
  },
  {
    icon: FastForward,
    title: "Recruitment Process Cycle (RPC) Optimization",
    description:
      "We systematically resolve friction points across the hiring lifecycle — compressing turnaround times, eliminating candidate ghosting, and boosting offer-to-joining ratios.",
  },
  {
    icon: CheckCircle2,
    title: "Multi-Continental Delivery Footprint",
    description:
      "Synchronized teams across Hyderabad, Bengaluru, and New Jersey allow cross-border sourcing, 24/7 coverage, and compliant international deployment.",
  },
];

export default function WhyChooseAbis() {
  return (
    <section className="py-24 bg-bg-alt relative tech-grid overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-abis-blue/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-abis-blue/10 border border-abis-blue/30 text-accent-fg text-xs font-semibold uppercase tracking-wider">
            Client-Oriented Value Proposition
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Why Enterprise Leaders <span className="text-gradient-blue">Choose ABIS.</span>
          </h2>

          <p className="text-base text-fg-muted leading-relaxed">
            In an era of generic staffing agencies, ABIS stands apart as a specialized consulting partner focused on sustained business momentum and technical precision.
          </p>
        </div>

        {/* 6 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-surface border border-theme/60 hover:border-abis-blue/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(32,109,247,0.2)] flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-fg/5 text-accent-fg group-hover:bg-abis-blue group-hover:text-on-accent transition-all duration-300 w-fit mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-fg mb-3 group-hover:text-accent-fg transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
