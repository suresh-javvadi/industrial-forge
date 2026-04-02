import { Cog, Factory, HardHat, PenTool, Wrench } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Mechanical Fabrication",
    desc: "Heavy structures, plate work, and custom assemblies built for high-load industrial environments.",
  },
  {
    icon: Cog,
    title: "CNC Machining",
    desc: "Turning, milling, and grinding for tolerance-critical parts that must fit and perform right the first time.",
  },
  {
    icon: HardHat,
    title: "Plant Installation",
    desc: "Field erection, alignment, and commissioning executed with shutdown-ready coordination and safety discipline.",
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    desc: "Preventive and corrective service for machines, lines, and utility systems where uptime matters.",
  },
  {
    icon: PenTool,
    title: "Custom Tooling",
    desc: "Fixtures, engineered sub-systems, and purpose-built solutions shaped around production realities.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-shell relative py-20 lg:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Capabilities</span>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Core Shop And
              <span className="text-gradient"> Site Services</span>
            </h2>
          </div>
          <div className="rounded-sm border border-border bg-card/70 px-4 py-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Fabricate / Machine / Install / Maintain
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, index) => (
            <div key={svc.title} className="group card-industrial p-8">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <svc.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-3xl leading-none text-foreground">{svc.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
              <div className="mt-6 h-[2px] w-20 bg-primary/40 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
