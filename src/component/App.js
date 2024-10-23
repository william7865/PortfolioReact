import React, { useState } from 'react';
import Animation from './Animation';
import MainPage from './MainPage'; // Importer la nouvelle page
import '../styles/App.css';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleAnimationEnd = () => {
    setShowMainPage(true);
  };

  return (
    <div className="App">
      {!showMainPage && <Animation onAnimationEnd={handleAnimationEnd} />}
      {showMainPage && <MainPage />} {/* Afficher la page principale */}
    </div>
  );
}

export default App;
