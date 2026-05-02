"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ language: "en", setLanguage: () => {} });

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("dr-lang");
    if (saved === "en" || saved === "bn") setLanguageState(saved);
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("dr-lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
