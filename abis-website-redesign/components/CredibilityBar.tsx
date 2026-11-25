import { Award, Globe, Building2, Layers } from "lucide-react";

const stats = [
  {
    icon: Award,
    title: "20+ Years of Industry Experience",
    desc: "Over two decades of solving complex recruitment and workforce challenges across global markets.",
    color: "text-accent-fg",
    badge: "Established 2000s",
  },
  {
    icon: Globe,
    title: "Presence Across India & USA",
    desc: "Seamless cross-border delivery through offices in Hyderabad, Bengaluru, and New Jersey.",
    color: "text-accent-fg",
    badge: "Dual-Continental",
  },
  {
    icon: Building2,
    title: "Trusted Business Partnerships",
    desc: "Longstanding partner to Fortune 500 enterprises, global MNCs, captive R&D centers, and tech leaders.",
    color: "text-indigo-400",
    badge: "Enterprise Grade",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    desc: "Integrated suite spanning permanent staffing, RPO, executive search, corporate learning, and application support.",
    color: "text-emerald-700 dark:text-emerald-400",
    badge: "Full RPC Lifecycle",
  },
];

export default function CredibilityBar() {
  return (
    <section className="bg-bg border-y border-theme/60 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-fg/5 hover:bg-fg/5 border border-theme/60 hover:border-theme/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-fg/5 group-hover:bg-abis-blue/15 transition-colors">
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-fg-subtle px-2 py-0.5 rounded bg-fg/5">
                      {stat.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-fg mb-2 group-hover:text-accent-fg transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-fg-subtle leading-relaxed">
                    {stat.desc}
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
