import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Controlled Dark Overlay (NOT too heavy) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Cyan Glow (reduced intensity) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,hsl(var(--primary)/0.08),transparent_60%)]" />

      {/* Subtle Pattern (very light) */}
      <div className="absolute inset-0 circuit-pattern opacity-5" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 glow-cyan-sm backdrop-blur-sm">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Precision Engineering & Manufacturing
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6">
          Engineering Excellence.
          <br />
          <span className="text-gradient">Built on Precision.</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Delivering high-performance mechanical manufacturing and fabrication
          solutions with uncompromising quality.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-bold text-lg px-8 py-6 
                         glow-cyan hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] 
                         transition-all duration-300"
            >
              Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>

          <a href="#projects">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary/50 text-foreground 
                         hover:bg-secondary font-semibold text-lg px-8 py-6 hover-glow"
            >
              <Eye className="mr-2 w-5 h-5" /> View Projects
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "100+", label: "Clients Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
