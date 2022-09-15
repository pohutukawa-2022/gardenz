import React, { useState, useEffect } from 'react'
import VolunteerList from '../../../subcomponents/volunteers/VolunteerList/VolunteerList'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getVolunteers } from './volunteersHelper'
import AddVolunteerForm from '../../../subcomponents/volunteers/RockUpVolunteerForm/AddVolunteerForm'

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
    <>
      <section>
        <h2>hello</h2>
        <VolunteerList volunteers={volunteers} eventId={id} />
        <AddVolunteerForm
          id={id}
          addExtraVolunteer={addExtraVolunteerHandler}
        />
      </section>
    </>
  )
}
