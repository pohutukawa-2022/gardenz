import React, { useState } from 'react'
import {
  setLocalStorage,
  getLocalStorage,
} from '../../../../localStorage-utils.js'

export default function ShopItem({ product }) {
  const [qty, setQty] = useState(0)
  const [stock, setStock] = useState(product.stock)

  function submitHandler() {
    setStock(stock - qty)
    const order = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
    }

    const cart = JSON.parse(getLocalStorage('cart')) || []
    const newCart = [
      ...cart.filter((obj) => obj.productId !== order.productId),
      {
        ...order,
        quantity: cart
          .filter((obj) => obj.productId === order.productId)
          .map((obj) => obj.quantity)
          .reduce((sum, value) => sum + value, order.quantity),
      },
    ]
    setLocalStorage('cart', JSON.stringify(newCart))
    setQty(0)
  }

  function qtyHandler(evt) {
    const name = evt.target.name

    if (name === 'increment' && qty < stock) {
      setQty(qty + 1)
    }
    if (name === 'decrement' && qty > 0) {
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
        <h5 name="quantity" className="flex items-center">
          {qty}
        </h5>
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
          onClick={stock > 0 ? submitHandler : null}
          className="font-bold h-12 text-black bg-blue w-full rounded-sm"
        >
          add to basket
        </button>
      </div>
    </div>
  )
}
