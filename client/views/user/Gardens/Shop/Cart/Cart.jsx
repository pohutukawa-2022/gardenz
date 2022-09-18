import CartItem from '../../../../../subcomponents/Cart/CartItem'
import React, { useEffect, useState } from 'react'
import GardenHeader from '../../../../../subcomponents/gardens/GardenHeader/GardenHeader'

export default function Cart() {
  // const { name, imageHeaderUrl } = banner
  try {
    const [cart, setCart] = useState([])
    useEffect(() => {
      const cartItems = localStorage.getItem('cart')
      setCart(cartItems)
    }, [])
  } catch (error) {
    console.error(error.message)
  }
  return (
    <>
      {/* <GardenHeader name={name} url={imageHeaderUrl} /> */}
      <CartItem cart={Cart} />
    </>
  )
}
