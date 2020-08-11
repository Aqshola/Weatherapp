import React, { useState } from "react"

export function WeatherSect({ data }) {
  const { city, wind, temp, weather } = data
  console.log(wind)
  return (
    <div>
      <div className="current-container">
        <div className="current-weather">
          <div className="img">
            <img src="#" alt="" />
          </div>
          <div className="current text">
            <h3>{weather}</h3>
            <h3>{city}</h3>
          </div>
        </div>
        <div className="current-detail">
          <ul>
            <li>{wind}</li>
            <li>{temp}</li>
            <li>ntah</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
