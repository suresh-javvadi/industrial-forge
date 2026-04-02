import { Lightbulb, Shield, Target } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Production Vision",
    text: "To be the manufacturing partner industries call first when precision, throughput, and reliability cannot be compromised.",
  },
  {
    icon: Lightbulb,
    title: "Engineering Mission",
    text: "To turn demanding industrial requirements into durable fabrication, machining, and installation solutions that perform on the plant floor.",
  },
  {
    icon: Shield,
    title: "Operating Standard",
    text: "Built around inspection discipline, safe execution, predictable timelines, and workmanship that stands up to continuous duty.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-shell relative py-20 lg:py-28 gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">About Us</span>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Built Like A
              <span className="text-gradient"> Manufacturing Partner</span>
            </h2>
          </div>
          <div className="card-industrial p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sri Satyaritha Engineers delivers mechanical fabrication, CNC machining, erection, and lifecycle
              support with the visual discipline and operating rigor clients expect from a serious industrial house.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="card-industrial p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl text-foreground">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
