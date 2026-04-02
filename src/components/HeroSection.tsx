import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-navy-radial">
      <div className="absolute inset-0 blueprint-grid" />
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-primary/10 rounded-full opacity-20 animate-[spin_60s_linear_infinite]" />
      <div className="absolute bottom-20 left-10 w-40 h-40 border border-primary/10 rounded-full opacity-15 animate-[spin_45s_linear_infinite_reverse]" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/40 rounded-full" />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-cyan-glow/40 rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 glow-cyan-sm">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Precision Engineering & Manufacturing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
          Engineering Excellence.
          <br />
          <span className="text-gradient">Built on Precision.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Delivering high-performance mechanical manufacturing and fabrication solutions with uncompromising quality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 glow-cyan">
              Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="#projects">
            <Button size="lg" variant="outline" className="border-border hover:border-primary/50 text-foreground hover:bg-secondary font-semibold text-lg px-8 py-6 hover-glow">
              <Eye className="mr-2 w-5 h-5" /> View Projects
            </Button>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "100+", label: "Clients Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
