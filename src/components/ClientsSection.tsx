import { Award } from "lucide-react";

const certifications = [
  { name: "ISO 9001:2015", detail: "Quality Management System", cert: "No. 305025112852Q", issuer: "QRO Certification" },
  { name: "AS9100D", detail: "Aviation, Space & Defence QMS", cert: "No. UQ-2025112816", issuer: "UK Certifications" },
];

const clients = [
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
  return (
    <section id="clients" className="py-20 lg:py-28 relative gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">Certifications & Clients</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Certified Quality. <span className="text-gradient">Trusted Partners.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex gap-4 card-industrial p-6">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.detail}</p>
                <p className="text-xs text-primary mt-1">{cert.cert} · {cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8">Our Esteemed Clients</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clients.map((client) => (
              <div key={client} className="px-5 py-2.5 border border-border rounded-lg bg-secondary/50 hover-glow transition-all duration-300">
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
