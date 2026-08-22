import { ENGLISH_MESSAGES } from "./english";
import { SPANISH_MESSAGES } from "./spanish";

export const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getMessages = (language: string) => {
  switch (language) {
    case LANGUAGES.ENGLISH:
      return ENGLISH_MESSAGES;
    case LANGUAGES.SPANISH:
      return SPANISH_MESSAGES;
    default:
      return ENGLISH_MESSAGES;
  }
};
