import type { FC } from "react";

interface AboutComponentProps {
  messages: any;
}

const AboutComponent: FC<AboutComponentProps> = ({ messages }) => {
  const about = messages?.about;

  if (!about) {
    return null;
  }

  const skills = about.skills ?? {};
  const frontend = skills.frontend ?? {};
  const backend = skills.backend ?? {};
  const cibersecurity = skills.cibersecurity ?? {};
  const description = about.description ?? {};

  const cibersecuritySkills = Object.values(cibersecurity.list ?? {});
  const softSkillsList = Object.values(cibersecurity.softSkills ?? {});

  const tracksData = [
    {
      id: "frontend",
      label: frontend.titleLabel ?? "",
      status: frontend.subTitleLabel ?? "",
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
      id: "backend",
      label: backend.titleLabel ?? "",
      status: backend.subTitleLabel ?? "",
      fillPercent: 40,
      skills: ["Node.js", "APIs REST"],
    },
    {
      id: "cibersecurity",
      label: cibersecurity.titleLabel ?? "",
      status: cibersecurity.subTitleLabel ?? "",
      fillPercent: 25,
      skills: cibersecuritySkills as string[],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#202940] px-3 py-20 scroll-mt-3"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[20px] text-[#E91E8C] tracking-[0.2em] uppercase font-bold">
            {about.headerLabel}
          </span>
          <div className="flex-1 h-[3px] bg-[#2a3350]" />
        </div>

        <h2 className="text-[42px] md:text-[56px] font-bold text-white leading-[1.02] tracking-[-0.02em] uppercase mb-8 max-w-3xl">
          {about.titleLabel}
          <br />
          <span className="text-[#E91E8C]">{about.secondTitleLabel}</span>
        </h2>

        <p className="text-sm md:text-base text-[#888] leading-relaxed max-w-4xl mb-16">
          {description.firstPart}{" "}
          <span className="text-[#ccc]">{description.secondPart}</span>{" "}
          {description.thirdPart}{" "}
          <span className="text-[#ccc]">{description.fourthPart} </span>
          {description.fifthPart}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] mb-16">
          {tracksData.map((track) => (
            <div key={track.id} className="bg-[#202940] p-7">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-white text-sm font-bold tracking-[0.1em] uppercase">
                  {track.label}
                </h3>
              </div>
              <p className="text-[10px] text-[#E91E8C] tracking-[0.15em] uppercase mb-4">
                {track.status}
              </p>

              <div className="h-[3px] w-full bg-[#1a2036] rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-[#E91E8C] rounded-full"
                  style={{ width: `${track.fillPercent}%` }}
                />
              </div>

              <ul className="flex flex-col gap-2">
                {track.skills.map((skill, index) => (
                  <li
                    key={`${track.id}-${index}-${skill}`}
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
            {softSkillsList.map((skill: any, index) => (
              <span
                key={`${skill}-${index}`}
                className="text-[11px] text-[#888] tracking-wide border border-[grey] rounded-[10px] px-3 py-1.5 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
