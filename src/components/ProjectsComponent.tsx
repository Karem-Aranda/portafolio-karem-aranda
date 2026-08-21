import type { FC } from "react";

type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Proyecto Uno",
    description: "In process",
    stack: ["React", "TypeScript", "Tailwind"],
    link: "https://tu-demo.com",
    repo: "https://github.com/tu-usuario/proyecto-uno",
  },
  {
    name: "Proyecto Dos",
    description: "In process",
    stack: ["React", "Node.js", "REST API"],
    link: "https://tu-demo.com",
    repo: "https://github.com/tu-usuario/proyecto-dos",
  },
  {
    name: "Proyecto Tres",
    description: "In process",
    stack: ["TypeScript", "Vite"],
    link: "https://tu-demo.com",
    repo: "https://github.com/tu-usuario/proyecto-tres",
  },
];

const ProjectsComponent: FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#202940] px-8 py-24 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[20px] text-[#E91E8C] tracking-[0.2em] uppercase font-bold">
            Projects
          </span>

          <div className="flex-1 h-[3px] bg-[#2a3350]" />
        </div>

        {/* Heading */}
        <h2 className="text-[42px] md:text-[56px] font-bold text-white leading-[1.02] tracking-[-0.02em] uppercase mb-14 max-w-3xl">
          Cosas que
          <br />
          <span className="text-[#E91E8C]">he construido. </span>
        </h2>

        <div className="flex flex-col border-t border-[#1a1a1a]">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start md:items-center border-b border-[#1a1a1a] py-8 group"
            >
              <span className="text-[white] text-xs tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-[#E91E8C] transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-[#666] cursor-text select-text group-hover:text-[white] leading-relaxed max-w-lg mb-3 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] text-[#888] tracking-wide border border-[#2a3350] rounded-[2px] px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col gap-3 md:gap-2 shrink-0">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#E91E8C] tracking-[0.1em] uppercase hover:underline"
                  >
                    Ver demo →
                  </a>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[white] tracking-[0.1em] uppercase hover:text-[#E91E8C] transition-colors"
                  >
                    Código →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
