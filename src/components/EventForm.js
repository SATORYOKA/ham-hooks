import React, { useState } from "react"

function EventForm({ state, dispatch }) {
  //const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  console.log("EventForm", state)

  const addEvent = (e) => {
    e.preventDefault()

    dispatch({
      type: "CREATE_EVENT",
      title,
      body
    })

    setTitle("")
    setBody("")
  }

  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm("Really")
    if (result) {
      dispatch({
        type: "DELETE_ALL_EVENTS"
      })
    }
  }

  const unCreatable = title === "" || body === ""

  const unDeletable = state.length === 0

  return (
    <div>
      <h4>Event Create form</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input type="text" className="form-control" id="formEventTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventTitle">Body</label>
          <textarea type="text" className="form-control" id="formEventBody" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
          Create Event
        </button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={unDeletable}>
          Delete All Event
        </button>
      </form>
    </div>
  )
}

export default EventForm
