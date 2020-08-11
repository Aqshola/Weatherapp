import React from "react"

export function Greeting() {
  function gethour() {
    let now = new Date().getHours()

    if (now > 5 && now < 12) {
      return "Good Morning"
    } else if (now >= 12 && now < 18) {
      return "Good Afternoon"
    } else if (now >= 18) {
      return "Good Night"
    }
  }
  return (
    <div className="greeting">
      <div className="greet">
        <h5>{gethour()}</h5>
      </div>
      <div className="date">
        <h6>25 januari 2020</h6>
      </div>
      <div></div>
    </div>
  )
}
