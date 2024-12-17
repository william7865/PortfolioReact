import React, { useState } from 'react';
import Animation from './Animation';
import MainPage from './MainPage';
import LanguageProvider from './LanguageContext';
import '../styles/App.css';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleAnimationEnd = () => {
    setShowMainPage(true);
  };

  return (
    <LanguageProvider> {}
      <div className="App">
        {!showMainPage && <Animation onAnimationEnd={handleAnimationEnd} />}
        {showMainPage && <MainPage />}
      </div>
    </LanguageProvider>
  );
}

export default App;
