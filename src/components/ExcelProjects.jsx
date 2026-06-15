const excelProjects = [
  {
    title: "Sales Dashboard",
    description:
      "Executive dashboard with KPIs and Pivot Tables."
  },
  {
    title: "Budget Tracker",
    description:
      "Automated budgeting workbook with charts."
  },
  {
    title: "Inventory Manager",
    description:
      "Excel solution powered by VBA automation."
  }
];

export default function ExcelProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">
        Excel Portfolio
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {excelProjects.map((project) => (
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

            <button className="bg-green-600 px-4 py-2 rounded">
              Download Workbook
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}