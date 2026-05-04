

function ForecastItem({item}){
    return(
        <div>
            <p>Date : {item.dt_txt}</p>
            <p>Temperature : {item.main.temp}</p>
            <p>Condition : {item.weather[0].main}</p>
        </div>
    )
}

export default ForecastItem;