import { Target, Lightbulb, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const cards = [
    { icon: Target, titleKey: "about_card1_title", textKey: "about_card1_text" },
    { icon: Lightbulb, titleKey: "about_card2_title", textKey: "about_card2_text" },
    { icon: Shield, titleKey: "about_card3_title", textKey: "about_card3_text" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">
            {t("about_label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("about_title")} <span className="text-gradient">{t("about_title_highlight")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("about_desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.titleKey} className="card-industrial p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t(card.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(card.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
