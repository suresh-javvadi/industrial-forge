import { Clock, Crosshair, Monitor, ShieldCheck, Users } from "lucide-react";

const points = [
  { icon: Users, title: "Experienced Shop Team", desc: "Engineers and technicians who understand industrial tolerances, field realities, and production pressure." },
  { icon: Crosshair, title: "Precision Focus", desc: "Repeatable processes, inspection discipline, and tight control over manufacturing quality." },
  { icon: Monitor, title: "Modern Equipment", desc: "CNC, fabrication, welding, and support equipment aligned to demanding industrial workloads." },
  { icon: Clock, title: "Reliable Timelines", desc: "Structured planning and execution that help clients hit shutdown, startup, and delivery windows." },
  { icon: ShieldCheck, title: "Safety Mindset", desc: "Execution standards built around plant safety, controlled work practices, and accountable supervision." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-shell relative py-20 lg:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Why Industrial Teams
              <span className="text-gradient"> Trust Our Output</span>
            </h2>
          </div>
          <div className="hazard-stripe h-3 w-full max-w-xs rounded-sm opacity-80" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="card-industrial flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl leading-none text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
