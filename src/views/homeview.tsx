import MainComponent from "../components/MainComponent";
import AboutComponent from "../components/AboutComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import ContactComponent from "../components/ContactComponent";

export function HomeView() {
  return (
    <>
      <MainComponent />
      <AboutComponent />
      <ProjectsComponent />
      <ContactComponent />
    </>
  );
}
