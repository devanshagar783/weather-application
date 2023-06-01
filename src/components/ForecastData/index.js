import React from 'react'
import "./index.css"

const ForecastData = ({data}) => {
    console.log("forecast dataaaa", data)

  return (
    <div classname="">
      <p>Temperature: {data?.main?.temp}</p>
      <p>Time: {data?.dt_txt}</p>
    </div>
  )
}

export default ForecastData
