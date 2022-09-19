import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOrdersByGarden } from './ordersHelper'

export default function Orders() {
  const { id } = useParams()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    const newOrders = await fetchOrdersByGarden(id)
    setOrders(newOrders)
    setLoading(false)
  }, [])

  return (
    <>
      <h1>These are the orders</h1>
      {loading ? (
        <p>loading..</p>
      ) : (
        orders.map((order) => {
          return (
            <div key={order.id}>
              <p> Order {order.id}</p>
              <p> {order.createdAt}</p>
            </div>
          )
        })
      )}
    </>
  )
}
