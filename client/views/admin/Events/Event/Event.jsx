import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getEvent } from './eventHelper'

import EditButton from '../../../../subcomponents/events/EventButtons/EditEvent'

import VolunteerList from '../../../../subcomponents/volunteers/VolunteerList/VolunteerList'
import AddVolunteerForm from '../../../../subcomponents/volunteers/RockUpVolunteerForm/AddVolunteerForm'
import RockUpVolunteerList from '../../../../subcomponents/volunteers/RockUpVolunteerList/RockUpVolunteerList'

export default function Event() {
  const { id } = useParams()

  const [event, setEvent] = useState({})

  const user = useSelector((globalState) => globalState.user)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getEvent(id, user).then((event) => {
      setEvent(event)
      return null
    })
  }, [user, id])

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
        <AddVolunteerForm addExtraVolunteer={addExtraVolunteer} id={id} />
      </section>
      <section>
        <EditButton eventId={id} />
      </section>
    </>
  )
}
