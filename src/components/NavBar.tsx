import { FC, ReactElement } from "react";

type Route = {
  name: string;
  path: string;
};

const ROUTES: Route[] = [
  {
    name: "ABOUT",
    path: "#about",
  },
  {
    name: "PROJECTS",
    path: "#projects",
  },
  {
    name: "CONTACT",
    path: "#contact",
  },
];

const NavBar: FC = () => {
  const renderNavRoutes = (): ReactElement[] => {
    return ROUTES.map((r) => (
      <a
        key={r.path}
        href={r.path}
        className="text-[#555] text-xs tracking-widest uppercase cursor-pointer hover:text-[#E91E8C] transition-colors"
      >
        {r.name}
      </a>
    ));
  };

  return (
    <nav className="flex justify-between px-8 py-6">
      <div className="flex gap-8">{renderNavRoutes()}</div>
    </nav>
  );
};

export default NavBar;
