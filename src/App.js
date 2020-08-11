import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { SearchBOx } from "./Searchbox"
import { WeatherSect } from "./WeatherSection"
import { Greeting } from "./Greeting"
import { Cardlist } from "./cardlist"

function App() {
  const [city, setCity] = useState("")
  const [currentWeather, setstateCurrentWeather] = useState([])
  const [forecast, setforecast] = useState([])
  const [Now, setNow] = useState([])

  onchange = (e) => {
    setCity(e.target.value)
  }

  function onclick() {
    fetch(
      `https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0e1d8596d00a9cb7562359634209c46d`
    )
      .then((res) => res.json())
      .then((el) => setstateCurrentWeather(el.dt))

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=0e1d8596d00a9cb7562359634209c46d`
    )
      .then((res) => res.json())
      .then((el) => {
        let m = []
        el.list.map((el) => m.push(el.dt))
        setforecast(m)
      })
    test()
  }
  function test() {
    let arr = []
    forecast.map((el, i) => {
      if (forecast[i] > currentWeather && arr.length < 3) {
        arr.push(forecast[i])
      }
    })
    setNow(arr)

    console.log("waktu skrg ", timeConverter(currentWeather))
    Now.map((el) => {
      console.log("waktu baru ", timeConverter(el))
    })
  }

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000)
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    var hour = a.getHours()
    var min = a.getMinutes()
    var sec = a.getSeconds()
    var time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec
    return time
  }

  return (
    <div className="App">
      <Greeting />
      <SearchBOx change={onchange} click={onclick} />
      <WeatherSect />
      <Cardlist />
    </div>
  )
}

export default App
