import React from "react";

export default function Basket({product}) {
  console.log(product);

  return (
    <div className="w-72 border-solid border-2 rounded-3xl px-12 py-10">
    <div className="justify-center p-1">
      <img src="https://cdn.shopify.com/s/files/1/0386/4602/2188/products/WebVersions4.jpg?v=1650839475&width=832"></img>
    </div>
    <div className="text-center pt-3">
      <h5>{product.name}</h5>
    </div>
    <div className='pt-3'>
      <h5>{`$${product.price}`}</h5>
    </div>
    <div className="flex justify-evenly pt-3">
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        -
      </button>
      <p>{product.stock}</p>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        +
      </button>
    </div>
    <div className='pt-3'>
      <button className="h-12 text-black bg-blue w-full rounded-sm">
        Add to basket
      </button>
    </div>
  </div>
  )
}