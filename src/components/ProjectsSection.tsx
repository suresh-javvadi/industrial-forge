const projects = [
  { title: "Steel Plant Fabrication", category: "Fabrication", color: "from-primary/60" },
  { title: "CNC Precision Components", category: "Machining", color: "from-cyan-glow/60" },
  { title: "Refinery Piping Installation", category: "Installation", color: "from-primary/40" },
  { title: "Industrial Conveyor System", category: "Machinery", color: "from-cyan-glow/40" },
  { title: "Power Plant Maintenance", category: "Maintenance", color: "from-primary/60" },
  { title: "Custom Tooling & Fixtures", category: "Custom Engineering", color: "from-cyan-glow/60" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 relative gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of industrial projects showcasing our engineering capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group relative aspect-[4/3] card-industrial overflow-hidden cursor-pointer">
              <div className="absolute inset-0 gradient-card" />
              <div className="absolute inset-0 circuit-pattern opacity-30" />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-20`} />

              <div className="absolute top-4 right-4 w-16 h-16 border border-border/40 rounded-full" />
              <div className="absolute bottom-8 left-6 w-8 h-8 border border-border/30 rounded" />

              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                <span className="text-xs text-primary mt-2 tracking-widest uppercase">{project.category}</span>
              </div>

              <div className="absolute top-4 left-4 px-3 py-1 bg-secondary/70 backdrop-blur-sm rounded-full border border-border">
                <span className="text-xs text-muted-foreground tracking-wide">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
