import React from "react"

export function WeatherSect({ data, display, error, icon }) {
  const { city, wind, temp, weather, hum } = data
  if (error) {
    return (
      <div className="failed">
        <img src={require(`../Asset/fail.svg`)} alt="error" />
        <h4>City not found</h4>
      </div>
    )
  } else {
    if (display === true) {
      return (
        <div>
          <div className="current-container">
            <div className="current-weather">
              <div className="img">
                <img src={require(`../Asset/${icon}.png`)} alt="" />
              </div>
              <div className="current text">
                <h6>{weather}</h6>
                <h5>{city}</h5>
              </div>
            </div>
            <div className="current-detail">
              <ul>
                <li className="detail-title">Temprature</li>
                <li>{`${Math.ceil(temp)} °C`}</li>
              </ul>
              <ul>
                <li className="detail-title">Wind</li>
                <li>{`${wind} m/s`}</li>
              </ul>
              <ul>
                <li className="detail-title">Humidity</li>
                <li>{`${hum}%`}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return <h1> </h1>
    }
  }
}
