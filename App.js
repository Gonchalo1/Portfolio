import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import MouseFollower from './components/home/customization/mouseFollower';
import BouncingBall from './components/home/customization/bouncingBall';
import Nav from './components/sections/nav'; // Importa el componente Nav
import './components/home/customization/changueIdiom';
import './App.css';
import PortfolioHome from './components/home/portfolioHome';

const AppContent = ({ toggleTheme, changeLanguage, theme, t, i18n }) => {
  const location = useLocation(); // Usa useLocation para obtener la ruta actual


  
  return (
    <div className="App">
      <header>
        <button className="theme-button" onClick={toggleTheme}>
          {t(theme === 'light' ? 'Light' : 'Dark')}
        </button>
        <button className="lang-button" onClick={changeLanguage}>
          {t(i18n.language === 'en' ? 'Esp' : 'En')}
        </button>
      </header>
      {location.pathname !== '/' && ( // Condicional para renderizar Nav
        <Nav
          toggleTheme={toggleTheme}
          changeLanguage={changeLanguage}
          theme={theme}
          t={t}
          i18n={i18n}
        />
      )}
      <Routes>
        <Route path="/" element={<PortfolioHome/>}/>
        <Route path="/about" />
        <Route path="/skills"  />
        <Route path="/certifications"  />
        <Route path="/experience" />
        <Route path="/posts" />
        <Route path="/learning" />
        <Route path="/front" />
        <Route path="/back"  />
      </Routes>
      <MouseFollower />
      <BouncingBall />
    </div>
  );
};

const App = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Router>
      <AppContent 
        toggleTheme={toggleTheme}
        changeLanguage={changeLanguage}
        theme={theme}
        t={t}
        i18n={i18n}
      />
    </Router>
  );
};

export default App;



//Tengo que seguir con las media queries de back y el resto