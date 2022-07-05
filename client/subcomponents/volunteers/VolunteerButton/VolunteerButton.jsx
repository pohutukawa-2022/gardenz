import React from 'react'

import { toggleVolunteerStatus } from './volunteerButtonHelper'

export default function VolunteerButton({
  eventId,
  volunteering,
  setVolunteering,
}) {
  function handleClick() {
    toggleVolunteerStatus(eventId, !volunteering, setVolunteering)
  }

  return (
    <>
      {!volunteering ? (
        <button
          onClick={handleClick}
          className="w-full block mt-5 p-3 text-center rounded-md text-white bg-darkGreen transition ease-in-out hover:bg-blue hover:-translate-y-1 hover:scale-110 hover:bg-blue duration-300"
        >
          Volunteer
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
