import { Target, Lightbulb, Shield } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Vision",
    text: "To be the most trusted name in mechanical engineering and manufacturing, driving industrial progress through innovation and precision.",
  },
  {
    icon: Lightbulb,
    title: "Our Mission",
    text: "To deliver world-class fabrication, machining, and engineering services that exceed client expectations in quality, safety, and reliability.",
  },
  {
    icon: Shield,
    title: "Core Values",
    text: "Quality without compromise. Safety at every step. Reliability in every project. Innovation in every solution.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">About Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Built for <span className="text-gradient">Industrial Excellence</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Sri Satyaritha Engineers is a leading mechanical engineering and manufacturing company specializing in precision fabrication, CNC machining, and large-scale industrial project execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="card-industrial p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
