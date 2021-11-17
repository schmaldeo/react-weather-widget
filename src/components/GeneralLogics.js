import React, { useEffect } from 'react'
import format from 'date-fns/format';


const GeneralLogics = ({ weather, setForecast, children }) => {
  useEffect(() => {
    let d = new Date(weather.location.localtime);
    const day1 = format(d, 'EEEE');
    const d2 = d.setDate(d.getDate() + 1);
    const day2 = format(d2, 'EEEE');
    const d3 = d.setDate(d.getDate() + 1);
    const day3 = format(d3, 'EEEE');
    setForecast([day1, day2, day3])
  }, [weather.location.localtime, setForecast])

  return (
    <>
      {children}
    </>
  )
}

export default GeneralLogics
