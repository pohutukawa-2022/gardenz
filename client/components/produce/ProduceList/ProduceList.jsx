import React, { useEffect, useState } from 'react'
import { getProduce } from '../produceHelper'

export default function ProduceList({ gardenid }) {
  const [produce, setProduce] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getProduce(gardenid).then((data) => {
      setProduce(data.produce)
      return null
    })
  }, [gardenid])

  return (
    <>
      <div className="column-9 event-container">
        <h1 className="events-title">Produce</h1>
      </div>

      <div>
        <section className="events-list">
          <ul>
            {produce.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
