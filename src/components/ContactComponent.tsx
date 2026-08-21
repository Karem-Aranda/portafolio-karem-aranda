import type { FC } from "react";
import imgContact from "../assets/photos/foto-contact.jpeg";

type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "Email",
    value: "karem.aranda23@gmail.com",
    href: "mailto:karem.aranda23@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/karem-aranda",
    href: "https://www.linkedin.com/in/karem-aranda-developer/",
  },
  {
    label: "GitHub",
    value: "github.com/karem-aranda",
    href: "https://github.com/Karem-Aranda",
  },
];

const ContactComponent: FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#202940] px-8 pb-24 flex flex-col scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto mb-[50px] w-full flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[20px] text-[#E91E8C] tracking-[0.2em] uppercase font-bold">
            Contact
          </span>

          <div className="flex-1 h-[3px] bg-[#2a3350]" />
        </div>

        <div className="flex items-center mb-[40px]">
          <div className="w-[50%]flex-wrap">
            <div className="flex items-center gap-2 border border-[#E91E8C] text-[#E91E8C] text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-[2px] w-fit mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" />
              Disponible de inmediato
            </div>
            <h2 className="text-[42px] md:text-[64px] font-bold text-white leading-[0.98] tracking-[-0.02em] uppercase mb-6 max-w-3xl">
              Medios de
              <br />
              <span className="text-[#E91E8C]">Contacto.</span>
            </h2>{" "}
            <p className="text-sm md:text-base text-[#888] leading-relaxed max-w-xl mb-16">
              Busco activamente oportunidades como Frontend o Full-stack
              Developer, full-time o freelance. Si tienes una vacante abierta o
              quieres platicar, no dudes en contactarme.
            </p>
          </div>
          <div className="w-[50%] flex justify-center -translate-y-5">
            <div className="w-full max-w-[275px] lg:max-w-[275px] lg:flex-shrink-0 flex justify-center lg:justify-end lg:items-start">
              <div className="relative w-full aspect-[4/5] h-[275px]">
                <img
                  src={imgContact}
                  alt="Karem Aranda"
                  className="w-full h-full object-contain rounded-[10px] transition-all duration-500 border  border-[#E91E8C]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[2px] bg-[#2a3350] mb-[40px]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] mb-16">
          {CONTACT_METHODS.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.label !== "Email" ? "_blank" : undefined}
              rel={method.label !== "Email" ? "noreferrer" : undefined}
              className="bg-[#202940] p-7 group hover:bg-[#1c2438] transition-colors"
            >
              <p className="text-[10px] text-[white] group-hover:text-[#ccc] tracking-[0.15em] uppercase mb-2">
                {method.label}
              </p>

              <p className="text-sm text-[#ccc] group-hover:text-[#E91E8C] transition-colors break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        <div className="h-[2px] bg-[#2a3350] mb-[40px]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-5">
          <p className="text-sm text-[#666] mr-auto">¿Prefieres algo?</p>

          <a
            href="mailto:tu-correo@ejemplo.com"
            className="bg-[#E91E8C] text-white text-[11px] font-bold tracking-[0.15em] uppercase py-3 px-6 rounded-[2px] hover:bg-[#c91878] transition-colors text-center"
          >
            Escríbeme →
          </a>

          <button className="border border-[white] text-[white] text-[11px] tracking-[0.12em] uppercase py-3 px-6 rounded-[2px] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors">
            Descargar CV
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full border-t border-t-2 border-[#2a3350] pt-6 mt-2 flex justify-between items-center">
        <span className="text-[10px] text-[white] tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} Karem Aranda
        </span>

        <span className="text-[10px] text-[white] tracking-[0.15em] uppercase">
          Hecho con React + TypeScript
        </span>
      </div>
    </section>
  );
};

export default ContactComponent;
