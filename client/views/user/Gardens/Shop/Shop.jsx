import React, { useEffect, useState } from 'react'
import { getProducts } from './shopHelper.js'

import ShopItem from './ShopItem'

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProducts()
      setProducts(product)
    }
    getProduct()
  }, [])



  return (
    <>
      <div className="flex justify-start">
        {products.map((product) => {
          return <ShopItem key={product.id} product={product} />
        })}
      </div>
    </>
  )
}
