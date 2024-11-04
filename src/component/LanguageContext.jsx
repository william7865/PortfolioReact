import React, { createContext, useState } from 'react';
import fr from '../data/fr.json'; 
import en from '../data/en.json';
export const LangContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const translations = lang === 'fr' ? fr : en;

  const toggleLang = (language) => {
    setLang(language);
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, translations }}>
      {children}
    </LangContext.Provider>
  );
};

export default LanguageProvider;
