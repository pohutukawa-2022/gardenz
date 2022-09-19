import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import consume from '../../../../consume'

export default function Orders() {
  const { id } = useParams()
  const token = ''
  const [orders, setOrders] = useState([])

  useEffect(async () => {
    const newOrders = await consume(`/garden/${id}/orders`, token, 'get')

    setOrders(newOrders)
  }, [orders])

  return orders.map((order) => {
    return (
      <div key={order.id}>
        <p> Order {order.id}</p>
      </div>
    )
  })
}
