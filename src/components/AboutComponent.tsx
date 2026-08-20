import type { FC } from "react";

type Track = {
  label: string;
  status: string;
  fillPercent: number;
  skills: string[];
};

const TRACKS: Track[] = [
  {
    label: "Frontend",
    status: "Core",
    fillPercent: 90,
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vite",
      "Git & GitHub",
      "REST APIs",
    ],
  },
  {
    label: "Backend",
    status: "En desarrollo",
    fillPercent: 40,
    skills: ["Node.js", "Express", "SQL básico", "APIs REST"],
  },
  {
    label: "Ciberseguridad",
    status: "Certificación en curso",
    fillPercent: 25,
    skills: ["Fundamentos OWASP", "Seguridad de redes", "Buenas prácticas"],
  },
];

const SOFT_SKILLS: string[] = [
  "Autodidacta",
  "Adaptabilidad",
  "Resolución de problemas",
  "Atención al detalle",
  "Comunicación",
  "Autonomía",
  "Trabajo en equipo",
];

const AboutComponent: FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#202940] px-8 py-24 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[20px] text-[#E91E8C] tracking-[0.2em] uppercase font-bold">
            About
          </span>
          <div className="flex-1 h-[3px] bg-[#2a3350]" />
        </div>

        <h2 className="text-[42px] md:text-[56px] font-bold text-white leading-[1.02] tracking-[-0.02em] uppercase mb-8 max-w-3xl">
          Frontend hoy.
          <br />
          <span className="text-[#E91E8C]">Full-stack en camino.</span>
        </h2>

        <p className="text-sm md:text-base text-[#888] leading-relaxed max-w-4xl mb-16">
          Desarrolladora frontend con dominio en{" "}
          <span className="text-[#ccc]">React, TypeScript</span> y el ecosistema
          moderno de JavaScript. Me gustá construir interfaces limpias,
          accesibles y cuidadas al detalle. Hoy amplío mi stack hacia backend
          con Node.js y curso una{" "}
          <span className="text-[#ccc]">certificación en ciberseguridad</span>,
          porque entender cómo se protege un sistema me hace escribir mejor
          código desde el frontend. Busco un equipo donde pueda aportar desde el
          día uno y seguir creciendo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] mb-16">
          {TRACKS.map((track) => (
            <div key={track.label} className="bg-[#202940] p-7">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-white text-sm font-bold tracking-[0.1em] uppercase">
                  {track.label}
                </h3>
              </div>
              <p className="text-[10px] text-[#E91E8C] tracking-[0.15em] uppercase mb-4">
                {track.status}
              </p>

              {/* Progress bar */}
              <div className="h-[3px] w-full bg-[#1a2036] rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-[#E91E8C] rounded-full"
                  style={{ width: `${track.fillPercent}%` }}
                />
              </div>

              <ul className="flex flex-col gap-2">
                {track.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs text-[#666] flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#444] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <p className="text-[20px] text-[#E91E8C] tracking-[0.15em] uppercase mb-7">
            Soft skills
          </p>
          <div className="flex flex-wrap gap-2.5">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-[11px] text-[#888] tracking-wide border border-[grey] rounded-[10px] px-3 py-1.5 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-[#1a1a1a] pt-10">
          <p className="text-sm text-[#666] mr-auto">
            ¿Buscas frontend o full-stack en tu equipo?{" "}
            <span className="text-white">Hablemos.</span>
          </p>
          {/*href="mailto:tu-correo@ejemplo.com" className="bg-[#E91E8C] text-white
          text-[11px] font-bold tracking-[0.15em] uppercase py-3 px-6
            rounded-[2px] hover:bg-[#c91878] transition-colors text-center"*/}
          <a>Contáctame →</a>
          <button className="border border-[#222] text-[#444] text-[11px] tracking-[0.12em] uppercase py-3 px-6 rounded-[2px] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors">
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
