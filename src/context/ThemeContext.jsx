import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.querySelector('html');
    root.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme => {
      if (theme === 'light') return 'dark';
      else return 'light';
    });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
