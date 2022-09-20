import React, { useState } from 'react'
import { updateOrder } from '../../views/admin/Gardens/orders/ordersHelper'

export function OrderItem({ order }) {
  const [status, setStatus] = useState(order.status)

  async function updateOrderStatus(newOrderStatus) {
    await updateOrder(order.id, newOrderStatus)
    setStatus(newOrderStatus)
  }

  return (
    <>
      <div className="flex flex-col mx-4">
        <div className="mb-10">
          <p className="font-extrabold">Order #{order.id}</p>
          <p>
            {status === 'Completed' ? '🟢' : '🔴'} Order Placed:
            {order.createdAt}
          </p>
          <p>Status: {status}</p>
        </div>
        <div className="flex flex-row justify-between mb-5 font-extrabold">
          <p>Products:</p>
          <p>Quantity</p>
        </div>
        {order.produce.map((product) => {
          return (
            <>
              <div className="flex flex-row justify-between py-5 mb-10 border-y-2 border-slate-300">
                <p>{product.name}</p>
                <p>{product.quantity}</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => updateOrderStatus('Completed')}
                  className="order-button button-primary py-1 bg-orange
                  rounded-lg text-white mr-6 px-4 sm:py-2 sm:px-6 hover:bg-lightGreen"
                >
                  Order Received
                </button>
                <button
                  onClick={() => updateOrderStatus('Cancelled')}
                  className="order-button py-1
                  rounded-lg text-black border-black border-2 px-4 1
                  sm:py-2 sm:px-4 hover:bg-orange hover:text-white hover:border-transparent"
                >
                  Cancel Order
                </button>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default OrderItem
