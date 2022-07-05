import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import EventItem from '../EventItem/EventItem'

export default function Events({ gardenid, events }) {
  const isAdmin = useSelector((globalState) => globalState.user.isAdmin)
  return (
    <>
      <div>
        <h1>Events</h1>
        <div className="add-event">
          {isAdmin ? (
            <Link to="/event/new" className="inline-button">
              Add New Event
            </Link>
          ) : null}
        </div>
      </div>

      <div>
        {events.length === 0 ? (
          <p>Sorry no events found, please come back later! </p>
        ) : (
          <section>
            {events.map((event) => (
              <EventItem
                key={event.id}
                gardenid={gardenid}
                event={event}
                isAdmin={isAdmin}
              />
            ))}
          </section>
        )}
      </div>
    </>
  )
}
