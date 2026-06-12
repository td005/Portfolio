export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          Your Name
        </h1>

        <p className="text-xl text-slate-300 mb-8">
          Web Developer • Data Analyst • Excel Specialist
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
          >
            View Portfolio
          </a>

          <a
            href="/resume.pdf"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}