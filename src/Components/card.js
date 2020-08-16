import React from "react"

export function Cardcom({ data }) {
  let date = new Date(data.dt_txt)
  let getDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(date)

  return (
    <div className="cardel">
      <div className="card-txt">
        <li>
          <b>{getDate}</b>
        </li>
        <li>{`${Math.ceil(data.main.temp)} °C`}</li>
      </div>
      <div className="card-weather">
        <img src={require(`../Asset/${data.weather[0].icon}.png`)} alt="" />
      </div>
    </div>
  )
}
