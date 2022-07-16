import React from 'react'

import EventItem from '../EventItem/EventItem'

export default function Events({ address, events }) {
  return (
    <main className="container mx-auto">
      <h1 className="font-sans text-2xl font-bold">Events</h1>

      {events.length === 0 ? (
        <p>Sorry no events found, please come back later! </p>
      ) : (
        <section className="w-2/3 min-w-2/3 grid grid-cols-2 gap-4 mt-5 pr-6">
          {events.map((event) => (
            <EventItem key={event.id} address={address} event={event} />
          ))}
        </section>
      )}
    </main>
  )
}
