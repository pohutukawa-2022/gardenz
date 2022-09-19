import React from 'react'

export function OrderItem({ order }) {
  return (
    <>
      <p>Order #{order.id}</p>
      <p>Order Placed: {order.createdAt}</p>
      <p>Status: {order.status}</p>
      <p>Product List</p>

      {order.produce.map((product) => {
        return (
          <>
            <p>Product Name: {product.name}</p>
            <p>Product Quantity: {product.quantity}</p>
          </>
        )
      })}
    </>
  )
}

export default OrderItem
