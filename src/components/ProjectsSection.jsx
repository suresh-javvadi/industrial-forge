import { Shield, Navigation, Radio, Layers, Cpu, Anchor } from "lucide-react";
import { useTranslation } from "react-i18next";

const DOMAINS = [
  {
    icon: Shield,
    titleKey: "domain1_title",
    catKey: "domain1_cat",
    descKey: "domain1_desc",
    accent: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: Navigation,
    titleKey: "domain2_title",
    catKey: "domain2_cat",
    descKey: "domain2_desc",
    accent: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    icon: Radio,
    titleKey: "domain3_title",
    catKey: "domain3_cat",
    descKey: "domain3_desc",
    accent: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    icon: Layers,
    titleKey: "domain4_title",
    catKey: "domain4_cat",
    descKey: "domain4_desc",
    accent: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    icon: Cpu,
    titleKey: "domain5_title",
    catKey: "domain5_cat",
    descKey: "domain5_desc",
    accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: Anchor,
    titleKey: "domain6_title",
    catKey: "domain6_cat",
    descKey: "domain6_desc",
    accent: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 lg:py-28 relative gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">
            {t("domains_label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("domains_title")}{" "}
            <span className="text-gradient">{t("domains_title_highlight")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("domains_desc")}
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOMAINS.map((domain) => (
            <div
              key={domain.titleKey}
              className="group card-industrial p-7 flex flex-col gap-5 hover-glow transition-all duration-300"
            >
              {/* Icon + Category Row */}
              <div className="flex items-start justify-between">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center border ${domain.accent} group-hover:scale-105 transition-transform duration-300`}
                >
                  <domain.icon className="w-7 h-7" />
                </div>
                <span
                  className={`text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border ${domain.accent}`}
                >
                  {t(domain.catKey)}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {t(domain.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(domain.descKey)}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className={`h-0.5 w-12 rounded-full mt-auto opacity-50 group-hover:w-full group-hover:opacity-80 transition-all duration-500 ${domain.accent.includes("blue") ? "bg-blue-400" : domain.accent.includes("cyan") ? "bg-cyan-400" : domain.accent.includes("violet") ? "bg-violet-400" : domain.accent.includes("amber") ? "bg-amber-400" : domain.accent.includes("emerald") ? "bg-emerald-400" : "bg-sky-400"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
