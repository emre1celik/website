import React, { createContext, useState, useContext, useEffect } from "react";

import en from "../languages/en";
import es from "../languages/es";
import et from "../languages/et";
import lv from "../languages/lv";
import pl from "../languages/pl";
import pt from "../languages/pt";
import ru from "../languages/ru";
import tr from "../languages/tr";

const translations = { en, es, et, lv, pl, pt, ru, tr };

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  // Load language from localStorage if available
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // Whenever language changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const translate = (key) => {
    const parts = key.split(".");
    const result = parts.reduce(
      (obj, part) => obj?.[part],
      translations[language]
    );

    if (typeof result === "string") return result;
    if (result === undefined || result === null) return key;
    return String(result);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
