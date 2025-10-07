import React, { createContext, useState, useContext } from "react";

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
  const [language, setLanguage] = useState("en");

  const translate = (key) => {
    const parts = key.split(".");
    const result = parts.reduce(
      (obj, part) => obj?.[part],
      translations[language]
    );

    // Ensure result is always a string
    if (typeof result === "string") return result;
    if (result === undefined || result === null) return key; // fallback
    return String(result); // convert other types (number, etc.) to string
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
