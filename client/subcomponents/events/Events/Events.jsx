import React from 'react'

import EventItem from '../EventItem/EventItem'

export default function Events({ address, events, user }) {
  return (
    <main className="container mx-auto">
      <h1 className="font-sans text-2xl font-bold">Events</h1>

      {events.length === 0 ? (
        <p>Sorry no events found, please come back later! </p>
      ) : (
        <section className="flex flex-wrap">
          {events.map((event) => (
            <EventItem
              key={event.id}
              address={address}
              event={event}
              user={user}
            />
          ))}
        </section>
      )}
    </main>
  )
}
