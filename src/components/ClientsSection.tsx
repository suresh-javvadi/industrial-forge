import { Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CLIENTS = [
  "Bharath Electronics Limited (BEL)",
  "Electronics Corporation of India (ECIL)",
  "XD Linx Space Labs Pvt Ltd.",
  "ICOMM Tele Ltd.",
  "Design Tech Systems Pvt Ltd.",
  "Unistring Tech Solutions Pvt Ltd.",
  "EI Wave Digitech (I) Pvt Ltd",
  "MilStar Integrated Systems Pvt Ltd.",
  "Zen Technologies",
  "Smart Rotamach Pvt Ltd.",
];

const ClientsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      name: t("cert1_name"),
      detail: t("cert1_detail"),
      cert: "No. 305025112852Q",
      issuer: "QRO Certification",
    },
    {
      name: t("cert2_name"),
      detail: t("cert2_detail"),
      cert: "No. UQ-2025112816",
      issuer: "UK Certifications",
    },
  ];

  return (
    <section id="clients" className="py-20 lg:py-28 relative gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">
            {t("clients_label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("clients_title")}{" "}
            <span className="text-gradient">{t("clients_title_highlight")}</span>
          </h2>
        </div>

        {/* Certifications */}
        <p className="text-muted-foreground text-sm tracking-widest uppercase text-center mb-6">
          {t("clients_cert_label")}
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex gap-4 card-industrial p-6">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.detail}</p>
                <p className="text-xs text-primary mt-1">
                  {cert.cert} · {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clients */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8">
            {t("clients_client_label")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="px-5 py-2.5 border border-border rounded-lg bg-secondary/50 hover-glow transition-all duration-300"
              >
                <span className="text-muted-foreground font-medium text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
