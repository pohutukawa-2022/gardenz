import React from 'react'
import AddVolunteerForm from '../RockUpVolunteerForm/AddVolunteerForm'
import VolunteerList from '../VolunteerList/VolunteerList'

function RockupVolunteers({ eventId, volunteers, addExtraVolunteer }) {

  return (
    <section>
      <VolunteerList volunteers={volunteers} eventId={eventId} />
      <AddVolunteerForm id={eventId} addExtraVolunteer={addExtraVolunteer} />
    </section>
  )
}

export default RockupVolunteers
