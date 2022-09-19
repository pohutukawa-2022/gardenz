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
    const fetchVolunteers = async () => {
      const volunteers = await getVolunteers(id)
      setVolunteers(volunteers)
    }
    fetchVolunteers()
  }, [user, id])

  function addExtraVolunteerHandler(extraVolunteer) {
    setVolunteers((state) => ({ ...state, extraVolunteer }))
  }

  return (
    <>
      <section>
        <VolunteerList volunteers={volunteers} eventId={id} />
        <AddVolunteerForm
          id={id}
          addExtraVolunteer={addExtraVolunteerHandler}
        />
      </section>
    </>
  )
}
