const Searchbar = ({ searchTerm, onSearch }) => {
  return (
    <div className="relative flex items-center">
      <img
        className="w-5 absolute top-0 bottom-0 my-auto left-8"
        src="/images/search-icon.svg"
        alt="search-icon"
      />
      <input
        type="text"
        className="text-inputColor pl-[4.5rem] outline-none w-full py-3 rounded-md shadow-md bg-elementColor md:pr-[10rem] xs:pr-[5.5rem] md:text-lg"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
