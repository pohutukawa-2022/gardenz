import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from './shopHelper.js'

import useGarden from '../../../../hooks/useGarden'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import ShopItem from './ShopItem'

export default function Shop() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
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
      <GardenHeader name={name} url={imageHeaderUrl} />
      <div className="flex justify-start">
        {products.map((product) => {
          return <ShopItem key={product.id} product={product} />
        })}
      </div>
    </>
  )
}
