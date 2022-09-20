import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { updateEvent, cancelEvent } from './editEventHelper'
import EventForm from '../../../../subcomponents/events/EventForm/EventForm'
import { useSelector } from 'react-redux'
import { getEvent } from '../../Events/Event/eventHelper'

export default function EditEvent() {
  const [event, setEvent] = useState(null)
  const navigate = useNavigate()
  const { eventId } = useParams()
  const user = useSelector((globalState) => globalState.user)

  useEffect(() => {
    ;(async () => {
      const eventData = await getEvent(eventId, user)
      setEvent(eventData)
    })()
  }, [])

  function submitEvent(form) {
    const data = { eventId, ...form }
    updateEvent(event.gardenId, data, navigate)
  }

  function cancelSubmit() {
    cancelEvent(eventId, navigate(-1))
  }

  return event ? (
    <EventForm
      formData={event}
      action="Update Event"
      submitEvent={submitEvent}
      cancelSubmit={cancelSubmit}
    />
  ) : null
}
