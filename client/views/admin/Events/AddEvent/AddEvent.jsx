import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addEvent } from './addEventHelper'

import EventForm from '../../../../subcomponents/events/EventForm/EventForm'

export default function AddEvent() {
  const navigate = useNavigate()

  function submitEvent(event) {
    addEvent(event, navigate)
  }

  const initialState = {
    title: '',
    date: '',
    volunteersNeeded: 0,
    description: '',
  }

  return (
    <EventForm
      formData={initialState}
      action="Create Event"
      submitEvent={submitEvent}
    />
  )
}
