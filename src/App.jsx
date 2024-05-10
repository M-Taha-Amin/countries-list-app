import { useState, useEffect } from 'react';
import { Header, MainContent } from './components';
import './App.css';
import countriesData from './data.json';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.querySelector('html');
    root.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const changeTheme = () => setDarkMode(!darkMode);

  return (
    <>
      <Header darkMode={darkMode} onChangeTheme={changeTheme} />
      <MainContent darkMode={darkMode} countriesData={countriesData} />
    </>
  );
};

export default App;
