import React from "react"
//import dispatch from "reduces"
//import reducer from "../reducers/"

function Event({ dispatch, event }) {
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm("Really???")
    if (result) {
      dispatch({ type: "DELETE_EVENT", id })
    }
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Event
