import React from 'react';
import UI from './components/UI'


const Weather = ({ validation, weather }) => {
    if (weather) {
        return <UI weather={weather} />
    } else {
        if (!validation) {
            return <span>Please wait</span>
        } else {
            return <></>
        }
    }
}
export default Weather
