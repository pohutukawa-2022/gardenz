import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getVolunteers } from './volunteersHelper'
import RockupVolunteers from '../../../subcomponents/volunteers/RockupVolunteers/RockupVolunteers'

export default function Volunteers() {
  const { id } = useParams()
  const [volunteers, setVolunteers] = useState([])
  const user = useSelector((globalState) => globalState.user)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getVolunteers(id).then((volunteers) => {
      setVolunteers(volunteers)
      return null
    })
  }, [user, id])

  function addExtraVolunteerHandler(extraVolunteer) {
    setVolunteers((state) => ({ ...state, extraVolunteer }))
  }

  return (
    <RockupVolunteers
      id={id}
      volunteers={volunteers}
      addExtraVolunteer={addExtraVolunteerHandler}
    />
  )
}
