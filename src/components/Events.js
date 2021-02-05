import React, { useReducer } from "react"
import Event from "./Event"
import reducer from "../reducers/"

function Events({ state, dispatch }) {
  return (
    <div>
      <h4>All Events</h4>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Events
