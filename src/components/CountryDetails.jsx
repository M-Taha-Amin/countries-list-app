const CountryDetails = ({ country, onBack }) => {
  const nativeName = Object.values(country.name.nativeName).at(0).official;
  return (
    <>
      {/* Button */}
      <button
        className="bg-elementColor px-6 py-3 shadow-md rounded-sm mt-2  mb-10 hover:bg-bgColor"
        onClick={onBack}>
        <span className="inline-block mr-2">&larr;</span>Back
      </button>

      {/* All Content */}
      <div className="w-72 mx-auto xs:w-96 md:flex md:w-full md:gap-x-8 md:items-center md:justify-between xl:gap-x-32 xl:justify-normal">
        {/* Image */}
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full object-cover bg-center md:w-80 lg:w-[500px]"
        />

        {/* Country Info */}
        <div className="md:flex md:flex-col">
          <h1 className="mt-8 mb-6 nunito-800 text-2xl xs:text-3xl">
            {country.name.common}
          </h1>

          <div className="md:flex md:gap-x-4 lg:gap-x-8 xl:gap-x-14">
            {/* Important Info */}
            <div className="mb-8 text-sm xs:text-base">
              <h3>
                <span className="nunito-600">Native Name: </span>
                {nativeName}
              </h3>
              <h3 className="my-2">
                <span className="nunito-600">Population: </span>
                {country.population.toLocaleString()}
              </h3>
              <h3 className="my-2">
                <span className="nunito-600">Region: </span>
                {country.region}
              </h3>
              <h3 className="my-2">
                <span className="nunito-600">Sub Region: </span>
                {country.subregion}
              </h3>
              <h3>
                <span className="nunito-600">Capital: </span>
                {country.capital?.join(', ')}
              </h3>
            </div>
            {/* Less Important Info */}
            <div className="mb-8 text-sm xs:text-base max-w-96">
              <h3>
                <span className="nunito-600">Top Level Domain: </span>
                {country.tld}
              </h3>
              <h3 className="my-2">
                <span className="nunito-600">Currencies: </span>
                {Object.values(country.currencies)
                  .map(currency => currency.name)
                  .join(', ')}
              </h3>
              <h3 className="my-2">
                <span className="nunito-600">Languages: </span>
                {Object.values(country.languages).join(', ')}
              </h3>
            </div>
          </div>

          {/* Border Details */}
          <div>
            <h3 className="text-base xs:text-lg my-2 nunito-800">
              Border Countries:
            </h3>
            <div className="flex flex-wrap gap-3">
              {country.borders?.map((border, i) => (
                <span
                  key={i}
                  className="text-sm bg-elementColor px-6 py-1 rounded-sm shadow-md hover:scale-[1.01] cursor-default">
                  {border}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
