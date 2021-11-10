const General = (props) => {
    return (
        <div className='general widget'>
            <div className='feelslike'>Feels like: {props.weather.current.feelslike_c}°C</div>
            <div className='humidity'>Humidity: {props.weather.current.humidity}%</div>
            <div className='pressure'>Pressure: {props.weather.current.pressure_mb} hPa</div>
            <div className='followingdays'>
                <div className='dayoverview'>
                    <div className='dayname'>Today</div>
                    <img src={`https:${props.weather.forecast.forecastday[0].day.condition.icon}`} alt={`{props.weather.forecast.forecastday[0].day.condition.icon}`}></img>
                    {props.weather.forecast.forecastday[0].day.maxtemp_c} °C
                </div>
                <div className='dayoverview'>
                    <div className='dayname'>{props.days[1]}</div>
                    <img src={`https:${props.weather.forecast.forecastday[1].day.condition.icon}`} alt={`{props.weather.forecast.forecastday[1].day.condition.icon}`}></img>
                    {props.weather.forecast.forecastday[1].day.maxtemp_c} °C
                </div>
                <div className='dayoverview'>
                    <div className='dayname'>{props.days[2]}</div>
                    <img src={`https:${props.weather.forecast.forecastday[2].day.condition.icon}`} alt={`{props.weather.forecast.forecastday[2].day.condition.icon}`}></img>
                    {props.weather.forecast.forecastday[2].day.maxtemp_c} °C
                </div>
            </div>
        </div >
    )
}

export default General
