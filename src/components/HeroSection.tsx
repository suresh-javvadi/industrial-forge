import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Years On Floor" },
  { value: "500+", label: "Assemblies Delivered" },
  { value: "100+", label: "Industrial Clients" },
];

const workflow = ["Fabrication", "Machining", "Installation", "Maintenance"];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="section-shell relative flex min-h-screen items-center overflow-hidden gradient-navy-radial pt-28"
    >
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute inset-0 circuit-pattern opacity-40" />
      <div className="absolute inset-x-0 top-24 h-3 hazard-stripe opacity-75" />
      <div className="absolute -left-20 top-32 h-48 w-48 rounded-full border border-primary/10" />
      <div className="absolute bottom-16 right-0 h-64 w-64 border-l border-t border-primary/10" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-primary/20 bg-card/70 px-4 py-3 glow-cyan-sm">
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Heavy Mechanical Manufacturing Division
            </span>
          </div>

          <h1 className="text-5xl leading-[0.9] text-foreground sm:text-6xl lg:text-8xl">
            Built For
            <br />
            <span className="text-gradient">Industrial Output</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We design, fabricate, machine, and install production-grade mechanical systems with the discipline,
            durability, and shop-floor precision expected from a serious manufacturing partner.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact">
              <Button
                size="lg"
                className="w-full rounded-sm border border-primary/30 bg-primary px-8 py-6 text-base font-bold uppercase tracking-[0.14em] text-primary-foreground glow-cyan sm:w-auto"
              >
                Request Quote <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#projects">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-sm border-border bg-card/60 px-8 py-6 text-base font-semibold uppercase tracking-[0.14em] text-foreground hover:border-primary/50 hover:bg-secondary sm:w-auto"
              >
                <Eye className="h-5 w-5" /> View Projects
              </Button>
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card-industrial p-5">
                <div className="text-4xl leading-none text-gradient">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="card-industrial p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Production Snapshot</p>
                <h2 className="mt-2 text-3xl text-foreground sm:text-4xl">Factory-Grade Delivery</h2>
              </div>
              <div className="steel-panel rounded-sm px-3 py-2 text-xs uppercase tracking-[0.18em] text-primary">
                Live Capability
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-border bg-secondary/60 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Tolerance Control</p>
                <p className="mt-3 text-4xl text-foreground">0.02</p>
                <p className="text-sm text-muted-foreground">mm repeatability on precision components</p>
              </div>
              <div className="rounded-sm border border-border bg-secondary/60 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Shift Response</p>
                <p className="mt-3 text-4xl text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support for plant maintenance and breakdown work</p>
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-border bg-background/40 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Execution Flow</p>
              <div className="mt-4 grid gap-3">
                {workflow.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                    <span className="min-w-[8rem] text-right text-sm uppercase tracking-[0.16em] text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 hazard-stripe h-3 rounded-sm opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
