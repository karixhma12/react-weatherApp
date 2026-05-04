import {useState,useEffect} from "react";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";
import WeatherCard from "./components/WeatherCard";

function App(){

  const [loading,setLoading] = useState(false);
  const [weather,setWeather] = useState(null);
  const [error, setError] = useState(null);

  function handleSearch(city){
    setLoading(true);
    setError(null);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
    fetch(URL)
    .then(res => res.json())
    .then((data)=>{
      if (data.cod !== 200) {
        setError("city not found");
        setWeather(null);
        setLoading(false)
        return; 
      }
      console.log(data);
      setWeather(data);
      setLoading(false);
    })

  }

  return(
    <div>
      <h1> Weather Dashboard </h1>
      <SearchBar onSearch={handleSearch}/>
      {error && <p>{error}</p>}
      {loading && !error && <p> Loading...</p>}
      {weather && !loading && !error &&  <WeatherCard weather={weather}/>}
      <ForecastList/>
    </div>
  )
}

export default App;