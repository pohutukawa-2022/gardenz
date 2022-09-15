import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from './shopHelper.js'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

export default function Shop() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const product = await getProducts()
    setProducts(product)
  }, [])

  console.log(products)

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <p>A shop will be here</p>
      <div className="w-3/12 border-solid border-2 rounded-3xl px-16 py-10">
        <div className="justify-center">
          <img src="https://cdn.shopify.com/s/files/1/0386/4602/2188/products/WebVersions4.jpg?v=1650839475&width=832"></img>
        </div>
        <div className="text-center">
          <h5>Small Veggie Box</h5>
        </div>
        <div>
          <h5>Price</h5>
        </div>
        <div className="flex justify-evenly">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            -
          </button>
          <p>5</p>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            +
          </button>
        </div>
        <div>
          <button className="text-white bg-blue w-full rounded-sm">
            Add to basket
          </button>
        </div>
      </div>
    </>
  )
}
