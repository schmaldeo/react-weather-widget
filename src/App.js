import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import CityInput from './components/CityInput';
import WeatherWidget from './components/WeatherWidget';
import keys from './keys.json'

const App = () => {
    const apiKey = keys.apiKey
    const [userInputCity, setUserInputCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [validationMessage, setValidationMessage] = useState(null);
    useEffect(() => {
        if (userInputCity) {
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userInputCity}&days=3`)
                .then(res => res.json())
                .then(json => {
                    if (json.current) {
                        setWeather(json);
                        setValidationMessage(null);
                    } else {
                        setValidationMessage('Invalid city')
                    }
                })
        }
    }, [userInputCity, apiKey])
    return (
        <WeatherWidget>
            <CityInput onUserInput={setUserInputCity} validation={validationMessage} />
            {userInputCity && <Weather weather={weather} validation={validationMessage} />}
        </WeatherWidget>
    )
}

export default App
