import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOrdersByGarden } from './ordersHelper'
import OrderList from '../../../../subcomponents/AdminOrders/OrderList'

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

  return <>{loading ? <p>loading..</p> : <OrderList orders={orders} />}</>
}
