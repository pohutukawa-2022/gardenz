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
          className="w-full block mt-5 p-3 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-green hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300"
        >
          Volunteer
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="w-full block mt-5 p-3 text-center rounded-md text-white bg-puce transition ease-in-out hover:bg-puce hover:-translate-y-1 hover:scale-110 hover:bg-puce duration-300"
        >
          Un-Volunteer
        </button>
      )}
    </>
  )
}
