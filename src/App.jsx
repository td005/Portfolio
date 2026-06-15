import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExcelProjects from "./components/ExcelProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExcelProjects />
      <Contact />
    </div>
  );
}

export default App;