import React, { useEffect, useState } from 'react'
import VolunteerButton from '../../volunteers/VolunteerButton/VolunteerButton'
import Conditional from '../../Conditional'

export default function EventItem({ garden, event, user }) {
  const { id, title, date, volunteersNeeded, totalVolunteers, isVolunteer } =
    event
  const [isVolunteering, setIsVolunteering] = useState(isVolunteer)
  const remainingVolunteers = volunteersNeeded - totalVolunteers
  const additionalVolunteers = Math.abs(remainingVolunteers)

  useEffect(() => {
    setIsVolunteering(isVolunteer)
  }, [isVolunteer])

  return (
    <article className="p-6 rounded-md border-2 shadow-xl">
      <h2 className="font-bold">{title}</h2>
      <dl>
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
            garden={garden}
          </>
        ) : (
          <p>
            No more volunteers needed, but we can always use more hands!
            (Currently {additionalVolunteers} extra volunteer
            {additionalVolunteers !== 1 ? 's' : ''})
          </p>
        )}
      </dl>
      <Conditional condition={user.id}>
        <VolunteerButton
          eventId={id}
          volunteering={isVolunteering}
          setVolunteering={setIsVolunteering}
        />
      </Conditional>
      <Conditional condition={!user.id}>
        <button className="w-full block mt-5 p-3 text-center rounded-md text-white bg-gray-300">
          Please sign in to volunteer
        </button>
      </Conditional>
    </article>
  )
}
