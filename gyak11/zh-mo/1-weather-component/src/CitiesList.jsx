const CitiesList = ({ weatherList, handleCityChange }) => {
  return (
    <ul className="gap-5 flex flex-row mt-20" id="citiesList">
      {weatherList.map((weather) => (
        <li
          key={weather.id}
          onClick={() => handleCityChange(weather.id)}
          className="bg-blue-500 text-white p-2 text-lg cursor-pointer select-none rounded-lg hover:scale-105 transition-transform shadow-lg"
        >
          {weather.name}
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
