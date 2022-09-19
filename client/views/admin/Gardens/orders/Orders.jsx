import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOrdersByGarden } from './ordersHelper'

export default function Orders() {
  const { id } = useParams()
  const [orders, setOrders] = useState([])

  useEffect(async () => {
    const newOrders = await fetchOrdersByGarden(id)
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
