import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="bg-elementColor text-textColor shadow-md py-6 text-[15px] sm:text-lg md:text-xl">
      <div className="flex items-center justify-between px-4 xs:px-8 md:px-12 lg:px-16">
        <a href="/" className="nunito-800">
          Where in the world?
        </a>
        <div className="flex items-center gap-x-3 md:gap-x-4">
          <img
            className="w-5 cursor-pointer"
            src={`/images/${
              theme === 'dark' ? 'moon-white' : 'moon-black-outline'
            }.svg`}
            alt="dark mode icon"
            onClick={toggleTheme}
          />
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </div>
      </div>
    </header>
  );
};

export default Header;
