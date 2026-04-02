const projects = [
  { title: "Steel Plant Fabrication", category: "Fabrication", code: "PR-01" },
  { title: "CNC Precision Components", category: "Machining", code: "PR-02" },
  { title: "Refinery Piping Installation", category: "Installation", code: "PR-03" },
  { title: "Industrial Conveyor System", category: "Machinery", code: "PR-04" },
  { title: "Power Plant Maintenance", category: "Maintenance", code: "PR-05" },
  { title: "Custom Tooling & Fixtures", category: "Custom Engineering", code: "PR-06" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-shell relative py-20 lg:py-28 gradient-navy">
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Project Portfolio</span>
          <h2 className="mt-3 text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Work That Looks Ready
            <span className="text-gradient"> For Production</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Each project is framed like a production package: clear scope, execution discipline, and an end result
            that feels engineered instead of merely assembled.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group card-industrial aspect-[4/3] cursor-pointer p-6">
              <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                <span className="rounded-sm border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
                  {project.code}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{project.category}</span>
              </div>

              <div className="absolute inset-0 opacity-70">
                <div className="absolute right-0 top-0 h-20 w-20 border-l border-b border-primary/15" />
                <div className="absolute bottom-0 left-0 h-24 w-24 border-r border-t border-primary/10" />
              </div>

              <div className="flex h-full flex-col justify-end">
                <div className="mb-4 h-[3px] w-16 bg-primary/50 transition-all duration-300 group-hover:w-28" />
                <h3 className="max-w-[12rem] text-3xl leading-none text-foreground">{project.title}</h3>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Execution category</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
