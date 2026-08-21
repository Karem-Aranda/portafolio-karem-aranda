import type { FC } from "react";
import NavBar from "./NavBar";
import imgProfile from "../assets/photos/foto-perfil.jpeg";

const MainComponent: FC = () => {
  return (
    <section className="min-h-screen bg-[#202940] text-slate-200 flex flex-col justify-between">
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-slate-700/50">
        <span className="text-white font-bold tracking-[0.2em] text-base uppercase">
          KA
        </span>
        <NavBar />
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-12 py-4 border-b border-slate-700/50 bg-[#181f33]/40">
        {[
          { label: "Role", value: "Fullstack Developer" },
          { label: "Stack", value: "React · Node · TypeScript" },
          { label: "Available for", value: "Full-time · Freelance" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[11px] text-slate-400 font-semibold tracking-widest uppercase mb-0.5">
              {label}
            </p>
            <p className="text-sm text-slate-200 font-medium">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
        <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 lg:border-r border-slate-700/50">
          <div className="flex items-center gap-2 border border-[#E91E8C] text-[#E91E8C] bg-[#E91E8C]/10 text-[11px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#E91E8C] animate-pulse" />
            Open to work
          </div>

          <div className="my-10 lg:my-auto">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight uppercase">
              Karem
              <br />
              <span className="inline block ml-70 text-[#E91E8C]">Aranda</span>
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="w-8 h-px bg-slate-500" />
            <span className="text-[11px] text-slate-400 tracking-[0.2em] uppercase font-medium">
              scroll ↓
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center gap-8 p-8 md:p-12 bg-[#1b2337]/30">
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <img
              className="object-cover object-center rounded-full w-80"
              src={imgProfile}
              alt="Karem Aranda"
            />
          </div>

          <p className="text-base mx-auto text-slate-300 text-justify leading-relaxed max-w-md">
            Full stack Developer especializada en crear aplicaciones web
            responsivas y centradas en el usuario con React, TS y JS.
            Experiencia integrando APIs, trabajando con Firebase y transformando
            diseños en interfaces funcionales.
            <span className="text-slate-400 block mt-2">
              En constante evolución hacia el perfil Full Stack y actualmente
              certificándome con Cisco para fortalecer mis conocimientos en
              redes y ciberseguridad.
            </span>
          </p>

          <div className="flex justify-center mx-auto sm:flex-row w-full max-w-lg">
            <button className="w-[200px] bg-[#E91E8C] text-white text-xs font-bold tracking-widest uppercase py-4 px-6 rounded shadow-lg shadow-[#E91E8C]/25 hover:bg-[#c91878] transition-all transform hover:-translate-y-0.5">
              Ver proyectos →
            </button>
            <button className="w-[200px] ml-[10px] border border-slate-600 text-slate-200 text-xs font-bold tracking-widest uppercase py-4 px-6 rounded hover:border-[#E91E8C] hover:text-[#E91E8C] transition-all">
              Descargar CV
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#E91E8C] py-3 px-6 overflow-hidden">
        <div className="flex justify-around items-center gap-6">
          {["React", "TypeScript", "Node.js", "REST APIs", "Git"].map(
            (s, i) => (
              <span
                key={i}
                className="text-white text-xs font-extrabold tracking-[0.25em] uppercase whitespace-nowrap"
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
