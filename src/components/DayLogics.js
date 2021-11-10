import React, { useEffect } from 'react';
import format from 'date-fns/format';

const DayLogics = ({ setStyle, setDay, weather, children }) => {
    const conditions = weather.current.condition.code;
    const day = format(new Date(weather.location.localtime), 'EEEE');

    const prefix = '//cdn.weatherapi.com/weather/64x64/';
    const s = weather.current.condition.icon;
    const time = s.substr(prefix.length);

    useEffect(() => {
        if (time === 'day') {
            switch (conditions) {
                case 1000:
                    setStyle('clearday');
                    break;
                case 1003:
                case 1006:
                    setStyle('cloudday');
                    break;
                case 1009:
                case 1030:
                    setStyle('heavycloudday');
                    break;
                default:
                    setStyle('elseday');
                    break;
            }
        } else {
            switch (conditions) {
                case 1000:
                    setStyle('clearnight');
                    break;
                case 1003:
                case 1006:
                    setStyle('cloudnight');
                    break;
                case 1009:
                case 1030:
                    setStyle('heavycloudnight');
                    break;
                default:
                    setStyle('elsenight');
                    break;
            }
        }
        setDay(day)
    }, [conditions, setStyle, day, setDay, time])
    return (
        <>
            {children}
        </>
    )
}

export default DayLogics
