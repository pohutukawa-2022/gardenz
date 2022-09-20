import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function CartItem(props) {
  const { name, quantity, price } = props.cart
  const [qty, setQty] = useState(props.cart.quantity || 0)

  function qtyHandler(evt) {
    const name = evt.target.name
    if (name === 'increment') {
      setQty((qty) => qty + 1)
    }
    if (name === 'decrement') {
      setQty((qty) => qty - 1)
    }
  }
  return (
    <section className="flex flex-col justify-around mt-10 w-4/5  mx-auto border shadow-lg rounded-lg p-10">
      <section className="flex flex-col justify-around">
        <section className="font-extrabold text-2xl font-sans text-darkBlue ">
          {name}
        </section>
        <section className="mt-4 font-extrabold font-sans text-darkBlue">
          Price: {price}
        </section>
      </section>
      <div className="flex justify-end ">
        <div className="flex flex-row border -mt-14">
          <button
            name="decrement"
            onClick={qtyHandler}
            className="text-4xl bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 shadow"
          >
            -
          </button>
          <p className="flex text-2xl font-bold px-12 pt-2">{qty}</p>
          <button
            name="increment"
            onClick={qtyHandler}
            className="flex text-4xl border-solid bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 shadow"
          >
            +
          </button>
        </div>
      </div>
      <div className="bg-zinc-400 w-200 border my-10"></div>
      <section className="flex flex-row justify-between mt-10">
        <section className="flex flex-col">
          <p className="font-extrabold">Shipping</p>
          <p className="font-extrabold text-2xl">Total (inc. GST)</p>
        </section>
        <section className="flex flex-col justify-end">
          <p className="font-extrabold">Calculated at checkout</p>
          <p className="font-extrabold text-2xl">{price}</p>
        </section>
      </section>
      <div className="bg-zinc-400 w-200 border my-10"></div>
      <section className="flex flex-row justify-end">
        <button className=" w-52  p-3 text-center rounded-md text-black bg-orange transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300  ">
          <Link to="/garden/:id/shop/delivery/:id">Checkout</Link>
          <Outlet />
        </button>
      </section>
    </section>
  )
}

export default CartItem

/*---------MAP-----------*/

// return (
//   <>
//     <GardenHeader name={name} url={imageHeaderUrl} />
//     <div className="flex justify-start">
//       {products.map((product) => {
//         return <ShopItem key={product.id} product={product} />
//       })}
//     </div>
//   </>
// )
// }

/*------------CART BUTTON--------*/
