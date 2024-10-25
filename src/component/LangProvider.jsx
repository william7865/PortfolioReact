import React from 'react';
import { LangProvider } from './context/LangContext';
import Portfolio from './component/MainPage';

const App = () => {
  return (
    <LangProvider>
      <Portfolio />
    </LangProvider>
  );
};

export default App;
