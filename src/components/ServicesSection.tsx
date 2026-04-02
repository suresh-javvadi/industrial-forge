import { Cog, Factory, HardHat, Wrench, PenTool } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Mechanical Fabrication",
    desc: "Heavy structural fabrication, plate work, and custom metal assemblies for industrial applications using advanced welding and cutting technologies.",
  },
  {
    icon: Cog,
    title: "CNC Machining & Precision Manufacturing",
    desc: "High-precision CNC turning, milling, and grinding services for complex components with tight tolerances and superior surface finishes.",
  },
  {
    icon: HardHat,
    title: "Industrial Installation & Erection",
    desc: "On-site installation, alignment, and commissioning of heavy machinery, piping systems, and structural steel for industrial plants.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    desc: "Preventive and breakdown maintenance services for industrial equipment, ensuring maximum uptime and operational efficiency.",
  },
  {
    icon: PenTool,
    title: "Custom Engineering Solutions",
    desc: "End-to-end engineering design and development of custom machinery, tools, and fixtures tailored to specific industrial requirements.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-card/30 relative">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-accent font-semibold">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive mechanical engineering and manufacturing capabilities to power your industrial projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="group bg-card border border-border rounded-xl p-8 card-hover hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                <svc.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{svc.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
