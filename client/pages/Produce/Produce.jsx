import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProduce } from './produceHelper'
//import { produceList } from './components/produceList?

export default function Produce() {
  const { id } = useParams()

  const [produce, setProduce] = useState({})

  const user = useSelector((globalState) => globalState.user)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getProduce().then((produce) => {
      //will likely be an array of objects
      setProduce(produce)
      return null
    })
  }, [])

  return (
    <>
      {user?.isAdmin ? (
        <>
          <section>
            <ProduceList produce={produce} gardenId={id} />
          </section>
        </>
      ) : null}
      {/* <EventDetail eventId={eventId} user={user} /> */}
    </>
  )
}

//This file/component is to display our produce
