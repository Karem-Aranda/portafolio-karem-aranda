import { useState } from "react";

import MainComponent from "../components/MainComponent";
import AboutComponent from "../components/AboutComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import ContactComponent from "../components/ContactComponent";

import { LANGUAGES, getMessages } from "../assets/messages/root";

export function HomeView() {
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH);

  const messages = getMessages(language);

  const handleLanguageChange = (newLanguage: string) => {
    console.log("Language changed to:", newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <>
      <MainComponent
        messages={messages.main}
        handleLanguageChange={handleLanguageChange}
      />
      <AboutComponent messages={messages} />
      <ProjectsComponent messages={messages} />
      <ContactComponent messages={messages} />
    </>
  );
}
