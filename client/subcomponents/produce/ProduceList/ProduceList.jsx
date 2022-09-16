import React, { useEffect, useState } from 'react'

import { showError } from '../../../slices/waiting'
import { dispatch } from '../../../store'
import { getProduce } from './produceHelper'

export default function ProduceList({ gardenid }) {
  const [produce, setProduce] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    try {
      const theProduce = async () => {
        const produce = await getProduce(gardenid)
        setProduce(produce)
      }
      theProduce()
    } catch (error) {
      dispatch(showError(error.message))
    }
    return () => {}
  }, [gardenid])

  return (
    <>
      <header>
        <h1>Produce</h1>
      </header>
      <section>
        <ul>
          {produce.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
