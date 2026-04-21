import { Target, Lightbulb, Shield } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Who We Are",
    text: "Sri Satyaritha Engineers is an Indian proprietorship company specializing in Engineering Design and Precision Component Manufacturing, with a proven track record of on-time delivery and high-quality work.",
  },
  {
    icon: Lightbulb,
    title: "Our Expertise",
    text: "With 25+ years of experience gained through collaboration with French companies, we specialize in high-precision components, sub-assemblies, press tools, and special purpose machines.",
  },
  {
    icon: Shield,
    title: "Our Commitment",
    text: "We are committed to customer satisfaction, brand reputation, and IP protection. Every project starts with an NDA to safeguard our clients' intellectual property and business data.",
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
            Sri Satyaritha Engineers (SSR Engineers) serves industries including Defence, Aerospace, Electronics, Communications, Automobiles, and Robotics — delivering precision parts and designs that meet the highest standards.
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
