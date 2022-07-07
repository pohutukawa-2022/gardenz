import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { getEvent } from './eventHelper'

import VolunteerList from '../../../../subcomponents/volunteers/VolunteerList/VolunteerList'
import AddVolunteerForm from '../../../../subcomponents/volunteers/RockUpVolunteerForm/AddVolunteerForm'
import RockUpVolunteerList from '../../../../subcomponents/volunteers/RockUpVolunteerList/RockUpVolunteerList'

export default function Event() {
  const navigate = useNavigate()

  const { id } = useParams()

  const [event, setEvent] = useState({})

  const user = useSelector((globalState) => globalState.user)

  const navigateAdd = () => {
    navigate('/admin/events/add')
  }

  const navigateEdit = () => {
    navigate(`/admin/events/${id}/edit`)
  }

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
      <button onClick={navigateAdd}> Add Event</button>
      <section>
        <button onClick={navigateEdit}>Edit Event</button>
      </section>
    </>
  )
}
