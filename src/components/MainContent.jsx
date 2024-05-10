import { useState, useEffect } from 'react';
import {
  CountryCard,
  Pagination,
  RegionFilter,
  Searchbar,
  CountryDetails,
} from '../components';

const pageSize = 10;

const MainContent = ({ darkMode, countriesData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState(countriesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [region, setRegion] = useState('');
  const [totalPages, setTotalPages] = useState(
    Math.ceil(countriesData.length / pageSize)
  );
  const [showDetails, setShowDetails] = useState(false);
  const [detailCountry, setDetailCountry] = useState('');

  const lastCountryIndex = currentPage * pageSize;
  const firstCountryIndex = lastCountryIndex - pageSize;

  useEffect(() => {
    const filtered = countriesData.filter(
      c =>
        c.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
        c.region.toLowerCase().includes(region.toLowerCase())
    );
    setTotalPages(Math.ceil(filtered.length / pageSize));
    setCountries(filtered.slice(firstCountryIndex, lastCountryIndex));
  }, [currentPage, searchTerm, region]);

  useEffect(() => setCurrentPage(1), [searchTerm, region]);

  const paginationProps = {
    currentPage,
    darkMode,
    isPrevActive: currentPage > 1,
    isNextActive: currentPage < totalPages,
    onPrevPage: () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    },
    onNextPage: () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    },
  };

  const homePage = (
    <>
      <div className="sm:flex mb-6 justify-between">
        <Searchbar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <RegionFilter region={region} onFilter={setRegion} />
      </div>

      {countries.length ? (
        <>
          <div className="mt-8 flex flex-col items-center gap-y-6 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:justify-center">
            {countries.map((country, i) => (
              <CountryCard
                key={i}
                country={country}
                onShowDetails={() => {
                  setShowDetails(true);
                  setDetailCountry(country);
                }}
              />
            ))}
          </div>
          <Pagination {...paginationProps} />
        </>
      ) : (
        <h3 className="text-center text-textColor mt-12 text-3xl nunito-800">
          No Results Found!
        </h3>
      )}
    </>
  );

  return (
    <main className="shadow-inner pt-6 pb-14  px-4 xs:px-8 md:px-12 lg:px-16 text-textColor">
      {showDetails ? (
        <CountryDetails
          country={detailCountry}
          onBack={() => setShowDetails(false)}
        />
      ) : (
        homePage
      )}
    </main>
  );
};

export default MainContent;
