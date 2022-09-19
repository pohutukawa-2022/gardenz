import React from 'react'
import OrderItem from './OrderItem'

export function OrderList({ orders }) {
  return orders.map((order) => <OrderItem key={order.id} order={order} />)
}

export default OrderList
