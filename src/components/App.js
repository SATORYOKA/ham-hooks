import React, { useState, useReducer } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import EventForm from "./EventForm"
import reducer from "../reducers/"

import Events from "./Events"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  console.log("App", state)

  return (
    <div className="container-fluid">
      <span style={{ marginTop: "800px" }}></span>
      <container style={{ marginTop: 200 }}>　　</container>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
