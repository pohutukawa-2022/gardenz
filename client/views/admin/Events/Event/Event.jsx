import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getEvent } from './eventHelper'

import EditButton from '../../../../subcomponents/events/EventButtons/EditEvent'

import VolunteerList from '../../../../subcomponents/volunteers/VolunteerList/VolunteerList'
import AddVolunteerForm from '../../../../subcomponents/volunteers/RockUpVolunteerForm/AddVolunteerForm'
import RockUpVolunteerList from '../../../../subcomponents/volunteers/RockUpVolunteerList/RockUpVolunteerList'

export default function Event() {
  const { gardenId, eventId } = useParams()

  const [event, setEvent] = useState({})

  const user = useSelector((globalState) => globalState.user)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    const fetchEvent = async () => {
      const event = await getEvent(eventId, user)
      setEvent(event)
    }
    fetchEvent()
  }, [user, eventId])

  function addExtraVolunteer(newVolunteer) {
    setEvent({
      ...event,
      extraVolunteers: [...event.extraVolunteers, newVolunteer],
    })
  }

  return (
    <>
      <section>
        <VolunteerList volunteers={event.volunteers} eventId={event.id} />
        <RockUpVolunteerList extraVolunteers={event.extraVolunteers} />
        <AddVolunteerForm addExtraVolunteer={addExtraVolunteer} id={eventId} />
      </section>
      <section>
        <EditButton gardenId={gardenId} eventId={eventId} />
      </section>
    </>
  )
}
