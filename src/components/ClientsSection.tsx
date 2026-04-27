import { Award, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

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

type CertItem = {
  nameKey: string;
  detailKey: string;
  certNo: string;
  issuer: string;
  issued: string;
  expires: string;
  pdf: string;
  gradient: string;
  border: string;
  iconBg: string;
  iconColor: string;
  btnClass: string;
};

const CERTIFICATIONS: CertItem[] = [
  {
    nameKey: "cert1_name",
    detailKey: "cert1_detail",
    certNo: "305025112852Q",
    issuer: "QRO Certification",
    issued: "28 Nov 2025",
    expires: "27 Nov 2028",
    pdf: "/iso-9001-2015.pdf",
    gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    btnClass:
      "text-blue-400 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300",
  },
  {
    nameKey: "cert2_name",
    detailKey: "cert2_detail",
    certNo: "UQ-2025112816",
    issuer: "UK Certifications",
    issued: "28 Nov 2025",
    expires: "27 Nov 2028",
    pdf: "/as9100d.pdf",
    gradient: "bg-gradient-to-br from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/30",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    btnClass:
      "text-violet-400 border-violet-500/30 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300",
  },
];

const ClientsSection = () => {
  const { t } = useTranslation();

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
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.nameKey}
              className={`card-industrial flex flex-col gap-5 p-6 border ${cert.border} ${cert.gradient}`}
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                <div
                  className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${cert.iconBg}`}
                >
                  <Award className={`w-6 h-6 ${cert.iconColor}`} />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{t(cert.nameKey)}</p>
                  <p className="text-sm text-muted-foreground">{t(cert.detailKey)}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {t("cert_issued_label")}
                  </p>
                  <p className="text-foreground font-medium">{cert.issued}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {t("cert_expires_label")}
                  </p>
                  <p className="text-foreground font-medium">{cert.expires}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {t("cert_number_label")}
                  </p>
                  <p className="text-foreground font-medium font-mono text-xs">{cert.certNo}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {t("cert_issuer_label")}
                  </p>
                  <p className="text-foreground font-medium">{cert.issuer}</p>
                </div>
              </div>

              {/* Scope */}
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                {t("cert_scope_text")}
              </p>

              {/* View Certificate */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 self-start text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 ${cert.btnClass}`}
              >
                <ExternalLink className="w-4 h-4" />
                {t("cert_view")}
              </a>
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
