export function updateVolCount(garden, eventId) {
  const updatedEvents = garden.events.map((event) => {
    if (event.id === eventId) {
      if (event.isVolunteer === false) {
        return {
          ...event,
          totalVolunteers: event.totalVolunteers + 1,
          isVolunteer: true,
        }
      } else {
        return {
          ...event,
          totalVolunteers: event.totalVolunteers - 1,
          isVolunteer: false,
        }
      }
    }
    return event
  })

  const newGarden = {
    ...garden,
    events: updatedEvents,
  }
  return newGarden
}
