import type { FC } from "react";

const MainComponent: FC = () => {
  return (
    <section className="h-screen bg-[#202940] ... flex flex-col overflow-hidden">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-[#222]">
        <span className="text-white font-bold tracking-[0.15em] text-sm uppercase">
          KA
        </span>
        <div className="flex gap-7">
          {["About", "Projects", "Contact"].map((l) => (
            <span
              key={l}
              className="text-[#555] text-xs tracking-widest uppercase cursor-pointer hover:text-[#E91E8C] transition-colors"
            >
              {l}
            </span>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-3 px-8 py-3 border-b border-[#1a1a1a]">
        {[
          { label: "Role", value: "Fullstack Developer" },
          { label: "Stack", value: "React · Node · TypeScript" },
          { label: "Available for", value: "Full-time · Freelance" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[10px] text-[#333] tracking-[0.15em] uppercase mb-0.5">
              {label}
            </p>
            <p className="text-xs text-[#666]">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 flex-1">
        <div className="flex flex-col justify-between p-10 border-r border-[#1a1a1a]">
          <div className="flex items-center gap-2 border border-[#E91E8C] text-[#E91E8C] text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-[2px] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" />
            Open to work
          </div>

          <h1 className="text-[72px] md:text-[86px] font-bold text-white leading-[0.92] tracking-[-0.02em] uppercase my-auto">
            Karem
            <br />
            <span className="text-[#E91E8C]">Aranda</span>
          </h1>

          <div className="flex items-center gap-5">
            <div className="w-10 h-px bg-[#333]" />
            <span className="text-[10px] text-[#333] tracking-[0.15em] uppercase">
              scroll ↓
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-10">
          <div className="w-16 h-16 rounded-full border border-[#222] bg-[#1a1a1a] flex items-center justify-center text-[#444] text-xs tracking-wider">
            foto
          </div>

          <p className="text-sm text-[#555] leading-relaxed max-w-[260px]">
            Cosas random
            <span className="text-[#888]"> Más cosas random</span> soy la mera
            verdura del caldo
          </p>

          <div className="flex flex-col gap-2.5 mt-7">
            <button className="bg-[#E91E8C] text-white text-[11px] font-bold tracking-[0.15em] uppercase py-3 rounded-[2px] hover:bg-[#c91878] transition-colors">
              Ver proyectos →
            </button>
            <button className="border border-[#222] text-[#444] text-[11px] tracking-[0.12em] uppercase py-3 rounded-[2px] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors">
              Descargar CV
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#E91E8C] py-2.5 px-8">
        <div className="flex gap-10 overflow-hidden">
          {["React", "TypeScript", "Node.js", "REST APIs", "Git"].map(
            (s, i) => (
              <span
                key={i}
                className="text-white text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
              >
                {s}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
