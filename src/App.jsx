import { Header, MainContent } from './components';
import './App.css';
import countriesData from './data.json';
import ThemeContextProvider from './context/ThemeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <MainContent countriesData={countriesData} />
    </ThemeContextProvider>
  );
};

export default App;
