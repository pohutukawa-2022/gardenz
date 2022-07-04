import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Conditional from '../../Conditional'
import { getProduce } from './produceHelper'

export default function ProduceList({ gardenid }) {
  const [produce, setProduce] = useState([])
  const user = useSelector((state) => state.user)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getProduce(gardenid).then(({ produce }) => {
      setProduce(produce)
      return null
    })
  }, [gardenid])

  return (
    <>
      <div>
        <h1>Produce</h1>
        <Conditional condition={user.isAdmin}>
          <Link to="/produce/new">Add Produce</Link>
        </Conditional>
      </div>
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
