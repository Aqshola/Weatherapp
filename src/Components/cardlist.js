import React from "react"
import { Cardcom } from "./card"

export function Cardlist({ data }) {
  try {
    return (
      <div className="forecastlist ">
        {data.map((el, i) => {
          if (i % 8 === 0 && i > 0) {
            return <Cardcom key={i} data={data[i]} />
          }
        })}
      </div>
    )
  } catch (error) {
    return <div></div>
  }
}
