import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import es from "./locales/es/translation.json";
import de from "./locales/de/translation.json";
import it from "./locales/it/translation.json";
import pt from "./locales/pt/translation.json";

export const SUPPORTED_LANGUAGES = ["en", "fr", "es", "de", "it", "pt"];

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      it: { translation: it },
      pt: { translation: pt },
    },

    // Fall back to English if a key or language is missing
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES,

    // Treat "en-US", "en-GB" etc. as "en"
    load: "languageOnly",

    // Language detection order: saved preference → browser setting
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "ssr_language",
    },

    interpolation: {
      // React already escapes values, no need for i18next to do it too
      escapeValue: false,
    },

    // Return the key itself if a translation is missing (never undefined/null)
    returnNull: false,
    returnEmptyString: false,

    // Silence missing-key warnings in production; log them in development
    missingKeyHandler: (lngs, _ns, key) => {
      if (import.meta.env.DEV) {
        console.warn(`[i18n] Missing key "${key}" for language(s): ${lngs.join(", ")}`);
      }
    },
  });

export default i18n;
