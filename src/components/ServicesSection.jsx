import { Cog, Factory, PenTool, Layers, Box, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

const SERVICE_ITEMS = [
  { icon: PenTool, titleKey: "service1_title", descKey: "service1_desc" },
  { icon: Cog, titleKey: "service2_title", descKey: "service2_desc" },
  { icon: Factory, titleKey: "service3_title", descKey: "service3_desc" },
  { icon: Layers, titleKey: "service4_title", descKey: "service4_desc" },
  { icon: Settings, titleKey: "service5_title", descKey: "service5_desc" },
  { icon: Box, titleKey: "service6_title", descKey: "service6_desc" },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">
            {t("services_label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("services_title")} <span className="text-gradient">{t("services_title_highlight")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("services_desc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_ITEMS.map((svc) => (
            <div key={svc.titleKey} className="group card-industrial p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors">
                <svc.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t(svc.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{t(svc.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
