import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { SearchBOx } from "./Searchbox"
import { WeatherSect } from "./WeatherSection"
import { Greeting } from "./Greeting"
import { Cardlist } from "./cardlist"

function App() {
  const [city, setCity] = useState("")
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecast, setforecast] = useState([])
  const [display, setdisplay] = useState(false)
  const [fail, setfail] = useState(false)
  const url = [
    `https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0e1d8596d00a9cb7562359634209c46d`,
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=0e1d8596d00a9cb7562359634209c46d`,
  ]

  onchange = (e) => {
    setCity(e.target.value)
  }

  function onclick() {
    const [current, forecast] = url
    fetch(current)
      .then((res) => res.json())
      .then((el) => {
        setCurrentWeather(
          {
            city: el.name,
            temp: el.main.temp,
            hum: el.main.humidity,
            wind: el.wind.speed,
            weather: el.weather[0].main,
            icon: el.weather[0].icon,
          },
          setdisplay(true),
          setfail(false)
        )
      })
      .catch((err) => setfail(true))

    fetch(forecast)
      .then((res) => res.json())
      .then((el) => {
        setforecast(el.list)
      })
  }
  return (
    <div className="container">
      <div className="App">
        <Greeting />
        <SearchBOx change={onchange} click={onclick} />
        <WeatherSect error={fail} data={currentWeather} display={display} />
        <Cardlist data={forecast} />
      </div>
    </div>
  )
}

export default App
