import ForecastItem from "./ForecastItem";

function ForecastList({forecast}){
    return(
    <div>
        {forecast.map((item) => {
          return <ForecastItem key={item.dt_txt} item={item} />  
        })}
    </div> 
    )   
}

export default ForecastList;