import React from 'react'
import OrderItem from './OrderItem'

export function OrderList({ orders }) {
  return orders.map((order) => (
    <div key={order.id} className="container mx-auto mt-20 text-lg">
      <OrderItem order={order} />
    </div>
  ))
}

export default OrderList
