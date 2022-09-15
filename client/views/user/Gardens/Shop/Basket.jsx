import React, { useState } from 'react'

export default function Basket({ product, setCart }) {
  const [qty, setQty] = useState(1)

  function submitHandler(evt) {
    const order = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
    }

    setCart((cart) => [...cart, order])

  }

  function qtyHandler(evt) {
    const name = evt.target.name
    console.log(name)

    if (name === 'increment' && qty < product.stock) {
      setQty(qty + 1)
    }
    if (name === 'decrement' && qty > 1) {
      setQty(qty - 1)
    }
  }

  return (
    <div className="m-8 w-72 border-solid border-2 rounded-3xl px-12 py-10">
      <div className="justify-center p-1">
        <img src="https://cdn.shopify.com/s/files/1/0386/4602/2188/products/WebVersions4.jpg?v=1650839475&width=832"></img>
      </div>
      <div className="text-center pt-3 font-bold">
        <h5>{product.name}</h5>
      </div>
      <div className="py-3 font-bold text-center">
        <h5>{`$${product.price}`}</h5>
      </div>
      <div className="flex justify-between border-solid rounded border-2 m-0 p-0">
        <button
          name="decrement"
          onClick={qtyHandler}
          className="text-2xl font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 shadow"
        >
          -
        </button>
        <p className="flex items-center">{qty}</p>
        <button
          name="increment"
          onClick={qtyHandler}
          className="text-2xl font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 shadow"
        >
          +
        </button>
      </div>
      <div className="pt-3">
        <button
          onClick={submitHandler}
          className="font-bold h-12 text-black bg-blue w-full rounded-sm"
        >
          add to basket
        </button>
      </div>
    </div>
  )
}
