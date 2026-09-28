import type { FC } from "react";

const ROUTES = [
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const NavBar: FC = () => (
  <nav aria-label="Main navigation" className="home-navigation flex min-w-0 items-center">
    {ROUTES.map(({ name, path }) => (
      <a
        key={path}
        href={path}
        className="flex min-h-11 flex-1 items-center justify-center rounded px-2 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-300 transition-colors hover:text-[#E91E8C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E91E8C] sm:px-2 sm:text-xs md:px-3"
      >
        {name}
      </a>
    ))}
  </nav>
);

export default NavBar;
