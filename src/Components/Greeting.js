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
  function getdate() {
    let day = new Date()
    let convert = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      day: "numeric",
      month: "long",
    }).format(day)

    return convert
  }
  return (
    <div className="greeting">
      <div className="greet">
        <h5>{gethour()}</h5>
      </div>
      <div className="date">
        <h6>{getdate()}</h6>
      </div>
      <div></div>
    </div>
  )
}
