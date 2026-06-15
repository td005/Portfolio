const projects = [
  {
    title: "Business Website",
    description:
      "Responsive website for a local business.",
    github: "#",
    demo: "#"
  },
  {
    title: "E-Commerce Platform",
    description:
      "Modern online store with shopping cart.",
    github: "#",
    demo: "#"
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive reporting dashboard.",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10">
        Web Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 rounded-xl p-6 border border-slate-800"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-6">
              {project.description}
            </p>

            <div className="flex gap-3">
              <a
                href={project.demo}
                className="bg-cyan-500 px-4 py-2 rounded"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                className="border border-slate-600 px-4 py-2 rounded"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}