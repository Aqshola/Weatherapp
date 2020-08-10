import React from "react"

export function WeatherSect() {
  return (
    <div>
      <div className="current-container">
        <div className="current-weather">
          <div className="img">
            <img></img>
          </div>
          <div className="current text">
            <h3>Weather</h3>
            <h3>City</h3>
          </div>
        </div>
        <div className="current-detail">
          <ul>
            <li>wind</li>
            <li>temp</li>
            <li>ntah</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
