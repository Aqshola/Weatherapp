import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { SearchBOx } from "../Components/Searchbox"
import { WeatherSect } from "../Components/WeatherSection"
import { Greeting } from "../Components/Greeting"
import { Cardlist } from "../Components/cardlist"

function App() {
  const [city, setCity] = useState("")
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecast, setforecast] = useState([])
  const [display, setdisplay] = useState(false)
  const [fail, setfail] = useState(false)
  const [icon, seticon] = useState("0")
  const key = `0e1d8596d00a9cb7562359634209c46d`

  onchange = (e) => {
    setCity(e.target.value)
  }

  function onclick() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
    )
      .then((res) => res.json())
      .then((el) => {
        setCurrentWeather(
          {
            city: el.name,
            temp: el.main.temp,
            hum: el.main.humidity,
            wind: el.wind.speed,
            weather: el.weather[0].main,
          },
          seticon(el.weather[0].icon),
          setdisplay(true),
          setfail(false)
        )
      })
      .catch((err) => setfail(true))

    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`
    )
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
        <WeatherSect
          error={fail}
          data={currentWeather}
          display={display}
          icon={icon}
        />
        <Cardlist data={forecast} />
      </div>
    </div>
  )
}

export default App
