import { Users, Crosshair, Monitor, Clock, ShieldCheck, Lock } from "lucide-react";

const points = [
  { icon: Users, title: "25+ Years of Experience", desc: "Led by professionals with 25 years of hands-on experience working with French companies on high-precision components, press tools, and SPMs." },
  { icon: Crosshair, title: "Cost-Effective Solutions", desc: "We partner with experienced micromachining shops to reduce costs while maintaining the same level of quality — saving you money without cutting corners." },
  { icon: Monitor, title: "Modern CNC Equipment", desc: "Our workshop has VMC machines (bed sizes up to 1365mm), CNC lathes, fitting section machines, and a Trimos V7 precision measuring instrument." },
  { icon: Clock, title: "On-Time Delivery", desc: "We have a strong track record of delivering orders on time. Reliable schedules and clear communication are central to how we work." },
  { icon: ShieldCheck, title: "ISO 9001:2015 & AS9100D Certified", desc: "Independently certified by QRO and UK Certifications for quality management in Defence, Aerospace, and Communications manufacturing." },
  { icon: Lock, title: "IP Protection & NDA", desc: "We take intellectual property seriously. Every client engagement begins with a Non-Disclosure Agreement to protect your designs and business data." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">Why Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Why Choose <span className="text-gradient">Sri Satyaritha</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4 card-industrial p-6">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-primary" />
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
