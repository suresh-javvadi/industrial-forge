import { Users, Crosshair, Monitor, Clock, ShieldCheck } from "lucide-react";

const points = [
  { icon: Users, title: "Experienced Engineering Team", desc: "Skilled professionals with decades of combined industrial experience." },
  { icon: Crosshair, title: "High-Precision Manufacturing", desc: "Tight tolerance machining and fabrication with rigorous quality checks." },
  { icon: Monitor, title: "Modern Equipment", desc: "State-of-the-art CNC machines, welding stations, and testing equipment." },
  { icon: Clock, title: "On-Time Delivery", desc: "Proven track record of meeting project deadlines without compromising quality." },
  { icon: ShieldCheck, title: "Safety Standards", desc: "Strict adherence to industrial safety norms and best practices." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30 relative">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-accent font-semibold">Why Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Why Choose <span className="text-accent">Sri Satyaritha</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4 bg-card border border-border rounded-xl p-6 card-hover">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
