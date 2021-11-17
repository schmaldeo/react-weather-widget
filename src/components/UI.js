import React, { useState } from 'react';
import Day from './Day';
import General from './General';
import DayLogics from './DayLogics'
import GeneralLogics from './GeneralLogics'

const UI = (props) => {
  const [style, setStyle] = useState('');
  const [day, setDay] = useState('');
  const [forecastDays, setForecastDays] = useState([]);
  return (
    <div className='container' >
      <DayLogics weather={props.weather} setStyle={setStyle} setDay={setDay} >
        <Day weather={props.weather} style={style} day={day} />
      </DayLogics>
      <GeneralLogics weather={props.weather} setForecast={setForecastDays}>
        <General weather={props.weather} days={forecastDays} />
      </GeneralLogics>
    </div >
  )
}

export default UI
