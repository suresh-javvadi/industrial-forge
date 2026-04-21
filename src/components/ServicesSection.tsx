import { Cog, Factory, PenTool, Layers, Box, Settings } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Engineering 3D Design & CAD Services",
    desc: "Advanced 3D modeling, detailed production drawings with GD&T, bill of material generation, assembly tagging, and CAD conversion from paper/PDF/AutoCAD to full 3D models.",
  },
  {
    icon: Cog,
    title: "CNC Precision Component Manufacturing",
    desc: "High-quality CNC machined components for Defence, Aerospace, Communications, and Robotics. We supply small to medium assemblies with precise tolerances and thorough inspection.",
  },
  {
    icon: Factory,
    title: "Press Tools Manufacturing",
    desc: "Custom press tools designed and manufactured for mass production of sheet metal and plastic parts. Specialized in aluminium extrusion press tools for French clients.",
  },
  {
    icon: Layers,
    title: "Sheet Metal Component Supply",
    desc: "Bulk production of high-precision sheet metal parts using custom press tools. We offer competitive rates and consistent quality for repeat orders.",
  },
  {
    icon: Settings,
    title: "Special Purpose Machines (SPMs)",
    desc: "Design and manufacturing of custom-built machines for specific industrial applications — including pneumatic, hydraulic, and automated SPMs as per customer specifications.",
  },
  {
    icon: Box,
    title: "Surface Treatment & Finishing",
    desc: "Heat treatment, hardening, anodising (colour or clear), zinc/nickel/cadmium/chrome plating, and spray booth painting for aluminium and steel components.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to delivery — design, machining, press tools, and special purpose machines for Defence, Aerospace, and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="group card-industrial p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors">
                <svc.icon className="w-7 h-7 text-primary" />
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
