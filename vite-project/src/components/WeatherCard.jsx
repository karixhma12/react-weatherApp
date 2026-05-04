
/*The data structure is:

City name → weather.name
Temperature → weather.main.temp
Condition → weather.weather[0].main
Humidity → weather.main.humidity*/

function WeatherCard({weather}){
    return(
        <>
            <div> city name : {weather.name} </div>
            <div> temperature : {weather.main.temp}  </div>
            <div> condition : {weather.weather[0].main} </div>
            <div> humidity : { weather.main.humidity} </div>
        </>
    )
}

export default WeatherCard;