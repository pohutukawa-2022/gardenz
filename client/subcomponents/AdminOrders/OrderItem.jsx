import React from 'react'
import { updateOrder } from '../../views/admin/Gardens/orders/ordersHelper'

export function OrderItem({ order }) {
  async function updateOrderStatus(newOrderStatus) {
    await updateOrder(order.id, newOrderStatus)
  }

  return (
    <>
      <p>Order #{order.id}</p>
      <p>Order Placed: {order.createdAt}</p>
      <p>Status: {order.status}</p>
      <p>Product List</p>

      {order.produce.map((product) => {
        return (
          <div key={product.id}>
            <p>Product Name: {product.name}</p>
            <p>Product Quantity: {product.quantity}</p>

            <button
              onClick={() => updateOrderStatus('Cancelled')}
              className="order-button"
            >
              Cancel Order
            </button>
            <button
              onClick={() => updateOrderStatus('Completed')}
              className="order-button button-primary"
            >
              Order Received
            </button>
          </div>
        )
      })}
    </>
  )
}

export default OrderItem
