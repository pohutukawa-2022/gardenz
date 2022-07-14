import React, { useEffect, useState } from 'react'
import VolunteerButton from '../../volunteers/VolunteerButton/VolunteerButton'

export default function EventItem({ garden, event }) {
  const { id, title, date, volunteersNeeded, totalVolunteers, isVolunteer } =
    event
  const [isVolunteering, setIsVolunteering] = useState(isVolunteer)
  const remainingVolunteers = volunteersNeeded - totalVolunteers
  const additionalVolunteers = Math.abs(remainingVolunteers)

  useEffect(() => {
    setIsVolunteering(isVolunteer)
  }, [isVolunteer])

  return (
    <article className="p-6 rounded-md border-2 shadow-xl flex flex-col justify-around">
      <h2 className="font-bold text-center p-6 rounded-md border-2">{title}</h2>
      <dl className="mt-6">
        <dt>Location</dt>
        <dd className="font-bold my-2">{garden?.address}</dd>
        <dt>Date &amp; Time</dt>
        <dd className="font-bold my-2">{date}</dd>
        {remainingVolunteers > 0 ? (
          <>
            <dt>Volunteers needed</dt>
            <dd className="font-bold my-2">
              {remainingVolunteers} of {volunteersNeeded}
            </dd>
          </>
        ) : (
          <p>
            No more volunteers needed, but we can always use more hands!
            (Currently {additionalVolunteers} extra volunteer
            {additionalVolunteers !== 1 ? 's' : ''})
          </p>
        )}
      </dl>
      <VolunteerButton
        eventId={id}
        volunteering={isVolunteering}
        setVolunteering={setIsVolunteering}
      />
    </article>
  )
}
