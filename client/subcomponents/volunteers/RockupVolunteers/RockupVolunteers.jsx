import React from 'react'
import AddVolunteerForm from '../RockUpVolunteerForm/AddVolunteerForm'
import VolunteerList from '../VolunteerList/VolunteerList'

function RockupVolunteers({ id, volunteers, addExtraVolunteer }) {

  return (
    <section>
      <VolunteerList volunteers={volunteers} eventId={id} />
      <AddVolunteerForm id={id} addExtraVolunteer={addExtraVolunteer} />
    </section>
  )
}

export default RockupVolunteers
