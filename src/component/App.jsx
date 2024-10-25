import React, { useState } from 'react';
import Animation from './Animation';
import MainPage from './MainPage';
import LanguageProvider from './LanguageContext'; // Importez le contexte
import '../styles/App.css';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleAnimationEnd = () => {
    setShowMainPage(true);
  };

  return (
    <LanguageProvider> {/* Enveloppez ici */}
      <div className="App">
        {!showMainPage && <Animation onAnimationEnd={handleAnimationEnd} />}
        {showMainPage && <MainPage />}
      </div>
    </LanguageProvider>
  );
}

export default App;
