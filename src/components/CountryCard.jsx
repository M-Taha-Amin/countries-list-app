const CountryCard = ({ country, onShowDetails }) => {
  return (
    <article
      className="bg-elementColor pb-10 shadow-md rounded-lg overflow-hidden hover:scale-[1.02] cursor-pointer transition-all duration-100 w-64"
      onClick={onShowDetails}>
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        className="w-full h-40 object-cover bg-center"
      />
      <div className="pl-6">
        <h2 className="mt-5 mb-3 nunito-800 text-lg md:text-[22px] max-w-56 leading-6">
          {country.name.common}
        </h2>
        <h3 className="text-xs md:text-sm">
          <span className="nunito-600">Population: </span>
          {country.population.toLocaleString()}
        </h3>
        <h3 className="text-xs my-1 md:text-sm">
          <span className="nunito-600">Region: </span>
          {country.region}
        </h3>
        <h3 className="text-xs md:text-sm">
          <span className="nunito-600">Capital: </span>
          {country?.capital?.at(0)}
        </h3>
      </div>
    </article>
  );
};

export default CountryCard;
