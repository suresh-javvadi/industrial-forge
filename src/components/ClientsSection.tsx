import { Award } from "lucide-react";

const certifications = ["ISO 9001:2015", "ISO 14001", "OHSAS 18001", "CE Certified"];

const clients = ["Steel Corp", "Petro Industries", "Power Gen Ltd", "Mfg Partners", "Heavy Works Inc"];

const ClientsSection = () => {
  return (
    <section className="section-shell relative py-20 lg:py-28 gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Compliance & Trust</span>
          <h2 className="mt-3 text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Standards That Support
            <span className="text-gradient"> Factory Confidence</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert} className="card-industrial flex flex-col items-center gap-3 p-6 text-center">
              <Award className="h-8 w-8 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">{cert}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 card-industrial p-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by leading industrial organizations
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-sm border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
