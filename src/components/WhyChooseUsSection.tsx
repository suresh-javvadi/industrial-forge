import { Users, Crosshair, Monitor, Clock, ShieldCheck, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

type WhyItem = {
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
};

const WHY_ITEMS: WhyItem[] = [
  { icon: Users, titleKey: "why1_title", descKey: "why1_desc" },
  { icon: Crosshair, titleKey: "why2_title", descKey: "why2_desc" },
  { icon: Monitor, titleKey: "why3_title", descKey: "why3_desc" },
  { icon: Clock, titleKey: "why4_title", descKey: "why4_desc" },
  { icon: ShieldCheck, titleKey: "why5_title", descKey: "why5_desc" },
  { icon: Lock, titleKey: "why6_title", descKey: "why6_desc" },
];

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">
            {t("why_label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("why_title")} <span className="text-gradient">{t("why_title_highlight")}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ITEMS.map((point) => (
            <div key={point.titleKey} className="flex gap-4 card-industrial p-6">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{t(point.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(point.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
