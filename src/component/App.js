import React, { useState } from 'react';
import Animation from './Animation';
import '../styles/App.css';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleAnimationEnd = () => {
    setShowMainPage(true);
  };

  return (
    <div className="App">
      {!showMainPage && <Animation onAnimationEnd={handleAnimationEnd} />}
      {showMainPage && (
        <div className="main-page">
          <h1>Bienvenue sur la page principale !</h1>
        </div>
      )}
    </div>
  );
}

export default App;
