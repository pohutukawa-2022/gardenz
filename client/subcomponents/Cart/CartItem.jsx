import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function CartItem(props) {
  const { name, quantity, price } = props.cart
  return (
    <>
      <div>
        <ul>
          <li>{name}</li>
          <li>
            {quantity} <button>decrement</button> <button>increment</button>
          </li>
          <li>{price}</li>
        </ul>
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
