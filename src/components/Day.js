import React from 'react'
import { GoLocation } from 'react-icons/go'
import Wind from './Wind';

const Day = (props) => {
    return (
        <div className={`day widget ${props.style}`}>
            <div className='weekDay'>
                {props.day}
            </div>
            <div className='localTime'>
                As for {props.weather.location.localtime} local time.
            </div>
            <div className='city'>
                <GoLocation />{props.weather.location.name}
            </div>
            <div className='wind'>
                <Wind dir={props.weather.current.wind_dir} speed={props.weather.current.wind_kph} />
            </div>
            <div className='conditions'>
                <div className='icon'>
                    <img src={`http:${props.weather.current.condition.icon}`} alt={props.weather.current.condition.text} className='image' />
                </div>
                <div className='temperature'>
                    {props.weather.current.temp_c}°C
                </div>
                <div className='description'>
                    {props.weather.current.condition.text}
                </div>
            </div>
        </div>
    )
}

export default Day
