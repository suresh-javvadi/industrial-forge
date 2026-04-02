import { Award } from "lucide-react";

const certifications = ["ISO 9001:2015", "ISO 14001", "OHSAS 18001", "CE Certified"];

const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">Trust</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Certifications & <span className="text-gradient">Standards</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert} className="flex flex-col items-center gap-3 card-industrial p-6">
              <Award className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-foreground text-center">{cert}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8">Trusted by leading industrial organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Steel Corp", "Petro Industries", "Power Gen Ltd", "Mfg Partners", "Heavy Works Inc"].map((client) => (
              <div key={client} className="px-6 py-3 border border-border rounded-lg bg-secondary/50 hover-glow transition-all duration-300">
                <span className="text-muted-foreground font-semibold tracking-wide text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
