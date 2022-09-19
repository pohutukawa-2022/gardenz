import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function CartItem(props) {
  const { name, quantity, price } = props.cart
  return (
    <>
      <article className="flex rounded-lg shadow-lg mx-72 my-10 justify-center">
        <div>
          <div>
            <ul>
              <li className="font-extrabold">{name}</li>
              <li>
                <div className="flex justify-between border-solid rounded border-2 m-0 p-0">
                  <button className="text-2xl font-bold bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 shadow">
                    -
                  </button>
                  <p>{quantity}</p>
                  <button className="text-2xl font-bold bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 shadow">
                    +
                  </button>
                </div>
              </li>
              <li className="font-extrabold">Price: {price}</li>
            </ul>
          </div>
        </div>
        <div className="flex my-40">
          <p className="font-extrabold">Shipping</p>
          <p className="font-extrabold">Calculated at checkout</p>
          <p className="font-extrabold ">Total (inc. GST)</p>
          <p className="font-extrabold">{price}</p>
        </div>
        <div className="flex content-end py-64 float-right ">
          <button className=" w-full p-3 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-green hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300  ">
            <Link to="/garden/:id/shop/delivery/:id">Checkout</Link>
            <Outlet />
          </button>
        </div>
      </article>
    </>
  )
}

export default CartItem
