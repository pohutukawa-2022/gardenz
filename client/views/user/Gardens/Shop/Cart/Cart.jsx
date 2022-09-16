import CartItem from '../../../../../subcomponents/Cart/CartItem'
import React, { useEffect, useState } from 'react'
import GardenHeader from '../../../../../subcomponents/gardens/GardenHeader/GardenHeader'

export default async function Cart() {
  // const { name, imageHeaderUrl } = banner
  const [cart, setCart] = useState([])
  useEffect(() => {
    const cartItems = localStorage.getItem('cart')
    setCart(cartItems)
  }, [])
  return (
    <>
      {/* <GardenHeader name={name} url={imageHeaderUrl} /> */}
      <CartItem cart={cart} />
    </>
  )
}
