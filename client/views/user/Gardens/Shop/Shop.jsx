import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from './shopHelper.js'

import useGarden from '../../../../hooks/useGarden'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import ProductList from './ProductList.jsx'

export default function Shop() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(async () => {
    const product = await getProducts()
    setProducts(product)
  }, [cart])

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <div className="flex justify-start">
        {products.map((product) => {
          return <ProductList 
            key={product.id} 
            product={product} 
            setCart={setCart} />
        })}
      </div>
    </>
  )
}
