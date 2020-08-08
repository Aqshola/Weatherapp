import React, { useState } from "react"
import "./App.css"

function App() {
  const [city, setCity] = useState("Bekasi")
  const [currentWeather, setstateCurrentWeather] = useState([])
  const [forecast, setforecast] = useState([])

  function onclick() {
    fetch(
      `https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0e1d8596d00a9cb7562359634209c46d`
    )
      .then((res) => res.json())
      .then((el) => setstateCurrentWeather(el))

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=0e1d8596d00a9cb7562359634209c46d`
    )
      .then((res) => res.json())
      .then((el) => {
        setforecast(el.list)
      })

    console.log(currentWeather)
    console.log(forecast)
  }

  return (
    <div className="App">
      <h2>{city}</h2>
      <button onClick={() => onclick()}>test</button>
    </div>
  )
}

export default App
