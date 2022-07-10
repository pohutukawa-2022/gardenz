import React, { useEffect, useState } from 'react'
import { getProduce } from './produceHelper'

export default function ProduceList({ gardenid }) {
  const [produce, setProduce] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getProduce(gardenid).then(({ produce }) => {
      setProduce(produce)
      return null
    })
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
