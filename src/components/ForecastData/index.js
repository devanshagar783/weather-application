import React from 'react'
import "./index.css"

const ForecastData = ({data}) => {
    // console.log("forecast dataaaa", data)

    function getime(dt){
      // console.log("devansh time:", dt)
      const hours=new Date(dt*1000).getHours();
      // console.log("devansh hours:", hours)
      if(hours > 12)
        return `${hours-12} PM`
      return `${hours} AM`
    }

  return (
    <div className="forecast-data-item">
      <p>{getime(data?.dt)}</p>
      <img className='forecast-image' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
      <p>{data?.main?.temp}°<span>C</span></p>
    </div>
  )
}

export default ForecastData
