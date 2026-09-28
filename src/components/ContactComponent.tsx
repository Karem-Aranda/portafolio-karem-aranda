import type { FC } from "react";
import imgContact from "../assets/photos/foto-contact.jpeg";
import imgCat from "../assets/photos/cat-cat-dance.gif";
import { LANGUAGES } from "../assets/messages/root";

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

interface ContactComponentProps {
  messages: any;
  language: string;
}

const ContactComponent: FC<ContactComponentProps> = ({ messages, language }) => {
  const cvFileName = language === LANGUAGES.SPANISH
    ? "Karem_Aranda_Full_Stack_Developer_ES.docx.pdf"
    : "Karem_Aranda_Full_Stack_Developer.docx.pdf";

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#202940] px-8 pb-24 flex flex-col scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto mb-[50px] w-full flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[20px] text-[#E91E8C] tracking-[0.2em] uppercase font-bold">
            {messages.contact.headerLabel}
          </span>

          <div className="flex-1 h-[3px] bg-[#2a3350]" />
        </div>

        <div className="flex items-center mb-[40px]">
          <div className="w-[50%]flex-wrap">
            <div className="flex items-center gap-2 border border-[#E91E8C] text-[#E91E8C] text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-[2px] w-fit mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" />
              {messages.contact.availableLabel}
            </div>
            <h2 className="text-[42px] md:text-[64px] font-bold text-white leading-[0.98] tracking-[-0.02em] uppercase mb-6 max-w-3xl">
              {messages.contact.titleLabel}
              <br />
              <span className="text-[#E91E8C]">
                {messages.contact.secondTitleLabel}.
              </span>
            </h2>{" "}
            <p className="text-sm md:text-base text-[#888] leading-relaxed max-w-xl mb-16">
              {messages.contact.descriptionLabel}
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

        <div className="h-[2px] bg-[#2a3350] mb-[20px]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-5">
          <div className="mr-auto  gap-5">
            <img
              className="h-auto w-32 rounded-xl object-contain md:w-36"
              src={imgCat}
            />{" "}
          </div>
          <a
            href="mailto:tu-correo@ejemplo.com"
            className="bg-[#E91E8C] text-white text-[11px] font-bold tracking-[0.15em] uppercase py-3 px-6 rounded-[2px] hover:bg-[#c91878] transition-colors text-center"
          >
            {messages.contact.btnSendMessageLabel} →
          </a>
          <a
            href={`/cv/${cvFileName}`}
            download={cvFileName}
            className="border border-[white] text-[white] text-[11px] tracking-[0.12em] uppercase py-3 px-6 rounded-[2px] hover:border-[#E91E8C] hover:text-[#E91E8C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E91E8C] transition-colors text-center"
          >
            {messages.contact.btnCvLabel}
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full border-t border-t-2 border-[#2a3350] pt-6 mt-2 flex justify-between items-center">
        <span className="text-[10px] text-[white] tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} Karem Aranda
        </span>

        <span className="text-[10px] text-[white] tracking-[0.15em] uppercase">
          {messages.contact.footertextLabel}
        </span>
      </div>
    </section>
  );
};

export default ContactComponent;
