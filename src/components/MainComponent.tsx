import type { FC } from "react";
import NavBar from "./NavBar";
import imgProfile from "../assets/photos/foto-perfil.jpeg";
import { LANGUAGES } from "../assets/messages/root";
import { ENGLISH_MESSAGES } from "../assets/messages/english";

interface MainComponentProps {
  messages: typeof ENGLISH_MESSAGES.main;
  language: string;
  contactLabel: string;
  handleLanguageChange: (newLanguage: string) => void;
}

const MainComponent: FC<MainComponentProps> = ({
  messages,
  language,
  contactLabel,
  handleLanguageChange,
}) => (
  <section className="home-hero flex min-h-screen flex-col bg-[#202940] text-slate-200">
    <header className="home-header flex items-center justify-between border-b border-slate-700/50 px-6 py-4 md:px-12 md:py-5">
      <a href="#home" aria-label="Karem Aranda, home" className="ka-mark shrink-0 font-bold uppercase tracking-[0.12em] text-white">
        K<span className="text-[#E91E8C]">A</span>
      </a>
      <div className="home-header-controls flex min-w-0 items-center gap-3 sm:gap-5">
        <NavBar />
        <div className="language-switch flex shrink-0 rounded-full border border-slate-500/60 p-0.5" role="group" aria-label="Language / Idioma">
          <button type="button" onClick={() => handleLanguageChange(LANGUAGES.ENGLISH)} aria-label="English" aria-pressed={language === LANGUAGES.ENGLISH} className={`language-option rounded-full px-3 py-1.5 text-xs font-bold text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E91E8C] ${language === LANGUAGES.ENGLISH ? "is-selected" : ""}`}>ENG</button>
          <button type="button" onClick={() => handleLanguageChange(LANGUAGES.SPANISH)} aria-label="Español" aria-pressed={language === LANGUAGES.SPANISH} className={`language-option rounded-full px-3 py-1.5 text-xs font-bold text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E91E8C] ${language === LANGUAGES.SPANISH ? "is-selected" : ""}`}>ESP</button>
        </div>
      </div>
    </header>

    <div className="hidden border-b border-slate-700/50 bg-[#181f33]/40 px-12 py-4 lg:flex">
      {[
        { label: "Role", value: "Fullstack Developer" },
        { label: "Stack", value: "React · Node · TypeScript" },
        { label: "Available for", value: "Full-time · Freelance" },
      ].map(({ label, value }) => (
        <div key={label} className="w-1/4">
          <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{label}</p>
          <p className="text-sm font-medium text-slate-200">{value}</p>
        </div>
      ))}
    </div>

    <main id="home" className="home-main grid flex-1 grid-cols-1 lg:grid-cols-12">
      <div className="home-intro flex flex-col p-6 sm:p-8 md:p-12 lg:col-span-7 lg:justify-between lg:border-r lg:border-slate-700/50">
        <div className="availability flex w-fit items-center gap-2 rounded-full border border-[#E91E8C] bg-[#E91E8C]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E91E8C]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#E91E8C]" />
          Open to work
        </div>
        <h1 className="home-name my-7 font-black uppercase leading-[0.88] tracking-tight text-white lg:my-auto lg:py-10">
          <span className="block">Karem</span>
          <span className="block text-[#E91E8C]">Aranda</span>
        </h1>
        <div className="hidden items-center gap-4 lg:flex">
          <div className="h-px w-8 bg-slate-500" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">scroll ↓</span>
        </div>
      </div>

      <div className="home-profile flex flex-col gap-6 bg-[#1b2337]/30 px-6 pb-8 sm:px-8 md:px-12 lg:col-span-5 lg:justify-center lg:gap-8 lg:py-12">
        <img className="profile-photo mx-auto aspect-square w-44 rounded-full border-4 border-[#293650] object-cover object-center sm:w-52 lg:w-80" src={imgProfile} alt="Karem Aranda" />
        <div className="mx-auto max-w-md text-base leading-relaxed text-slate-300 sm:text-lg lg:text-base">
          <p>{messages.DescriptionLabel}</p>
          <p className="mt-3 text-slate-400">{messages.ContinuosDescriptionLabel}</p>
        </div>
        <div className="home-actions mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <a href="#projects" className="flex min-h-12 flex-1 items-center justify-center rounded bg-[#E91E8C] px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#E91E8C]/25 transition-all hover:-translate-y-0.5 hover:bg-[#c91878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {messages.btnSeeProjectsLabel} →
          </a>
          <a href="#contact" className="flex min-h-12 flex-1 items-center justify-center rounded border border-slate-500 px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-200 transition-colors hover:border-[#E91E8C] hover:text-[#E91E8C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E91E8C]">
            {contactLabel}
          </a>
        </div>
      </div>
    </main>

    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 bg-[#E91E8C] px-4 py-3 sm:justify-around sm:gap-6">
      {["React", "TypeScript", "Node.js", "REST APIs", "Git"].map((skill) => (
        <span key={skill} className="whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.16em] text-white sm:text-xs sm:tracking-[0.25em]">{skill}</span>
      ))}
    </div>
  </section>
);

export default MainComponent;
