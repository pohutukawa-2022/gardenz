import React from 'react'
import { useParams } from 'react-router-dom'
import  {getProducts}  from './shopHelper.js'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Shop() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const [ products , setProducts ] = useState([])

  useEffect(async () => {
    const product = await getProducts()
    setProducts(product)
    
  }, [])

  // useEffect(() => {
  // }, [products])
  
  console.log(products);

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <p>A shop will be here</p>
      <h2>Do Something here</h2>
    </>
  )
}
