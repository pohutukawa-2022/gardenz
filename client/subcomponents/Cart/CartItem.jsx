import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function CartItem(props) {
  const { name, quantity, price } = props.cart
  return (
    <>
      <div className="m-8 w-72 border-solid border-2 rounded-3xl px-12 py-10">
        <div>
          <ul>
            <li className="text-center pt-3 font-bold">{name}</li>
            <li>
              <div>
                <button className="text-2xl font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 shadow">
                  -
                </button>
                {quantity}
                <button className="text-2xl font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 shadow">
                  +
                </button>
              </div>
            </li>
            <li className="text-center pt-3 font-bold">Price: {price}</li>
          </ul>
        </div>
      </div>
      <div>
        <p>Shipping</p>
        <p>Calculated at checkout</p>
        <p>Total (inc. GST)</p>
        <p>{price}</p>
        <button>
          <Link to="/garden/:id/shop/delivery/:id">Checkout</Link>
          <Outlet />
        </button>
      </div>
    </>
  )
}

export default CartItem
