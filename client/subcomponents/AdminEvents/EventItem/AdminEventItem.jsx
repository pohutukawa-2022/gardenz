import React, { useEffect, useState } from 'react'

import EditButton from '../../Buttons/EditButton'
export default function EventItem({ event }) {
  const {
    id,
    title,
    date,
    address,
    volunteersNeeded,
    totalVolunteers,
    isVolunteer,
    status,
    time,
  } = event

  const [isVolunteering, setIsVolunteering] = useState(isVolunteer)
  const remainingVolunteers = volunteersNeeded - totalVolunteers
  const additionalVolunteers = Math.abs(remainingVolunteers)

  useEffect(() => {
    setIsVolunteering(isVolunteer)
  }, [isVolunteer])

  return (
    <article className="p-6 rounded-md border-2 border-blue">
      <h2 className="font-bold">{title}</h2>
      <dl>
        <dt className="font-bold my-2">Date &amp; Time</dt>
        <dd>
          {date} at {time}
        </dd>
        <dt className="font-bold my-2">Address</dt>
        <dt>{address}</dt>
        {remainingVolunteers > 0 ? (
          <>
            <dt className="font-bold my-2">Volunteers needed</dt>
            <dd>
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
      <p>Event is {status}!</p>
      <EditButton
        eventId={id}
        volunteering={isVolunteering}
        setVolunteering={setIsVolunteering}
      />
    </article>
  )
}
