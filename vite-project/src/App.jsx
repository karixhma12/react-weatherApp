import {useState,useEffect} from "react";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";
import WeatherCard from "./components/WeatherCard";
import ForecastItem from "./components/ForecastItem";

function App(){

  const [loading,setLoading] = useState(false);
  const [weather,setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(null);

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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
    .then(res=>res.json())
    .then(data=>{
      const dailyData = data.list.filter((item)=>{
        if(item.dt_txt.includes("12:00:00")){
          return true;
        }
        else{
          return false;
        }
      })
      setForecast(dailyData);
    })  
    })

  }

  return(
    <div>
      <h1> Weather Dashboard </h1>
      <SearchBar onSearch={handleSearch}/>
      {error && <p>{error}</p>}
      {loading && !error && <p> Loading...</p>}
      {weather && !loading && !error &&  <WeatherCard weather={weather}/>}
      {forecast && !loading && !error && <ForecastList forecast={forecast}/>}
    </div>
  )
}

export default App;