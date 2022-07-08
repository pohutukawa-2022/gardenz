import React from 'react'

import { toggleEditStatus } from './EditButtonHelper'
//these things do not exist at the moment, so we are going to build a hardcoded version that takes us to the edit page.
export default function EditButton({ eventId, editing, setEditing }) {
  function handleClick() {
    toggleEditStatus(eventId, !editing, setEditing)
  }
  //change all these to links that take us to the edit page and use index index as a reference.

  return (
    <>
      {!editing ? (
        <button
          onClick={handleClick}
          className="w-full block mt-5 p-3 text-center rounded-md text-white bg-darkGreen transition ease-in-out hover:bg-blue hover:-translate-y-1 hover:scale-110 hover:bg-blue duration-300"
        >
          Edit
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="w-full block mt-5 p-3 text-center rounded-md text-white bg-blue transition ease-in-out hover:bg-darkGreen hover:-translate-y-1 hover:scale-110 hover:bg-blue duration-300"
        >
          Un-Volunteer
        </button>
      )}
    </>
  )
}
