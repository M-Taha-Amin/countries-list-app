const Header = ({ darkMode, onChangeTheme }) => {
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
              darkMode ? 'moon-white' : 'moon-black-outline'
            }.svg`}
            alt="dark mode icon"
            onClick={onChangeTheme}
          />
          {darkMode ? 'Light' : 'Dark'} Mode
        </div>
      </div>
    </header>
  );
};

export default Header;
