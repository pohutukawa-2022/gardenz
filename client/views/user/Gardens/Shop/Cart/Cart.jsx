import CartItem from '../../../../../subcomponents/Cart/CartItem'
import React, { useEffect, useState } from 'react'
// import GardenHeader from '../../../../../subcomponents/gardens/GardenHeader/GardenHeader'

export default function Cart() {
  // const { name, imageHeaderUrl } = banner
  const [cart, setCart] = useState([])
  const cartDummy = { name: 'frey', quantity: 2, price: '$40' }

  localStorage.setItem('cart', JSON.stringify(cartDummy))
  useEffect(() => {
    const cartItems = localStorage.getItem('cart')
    setCart(JSON.parse(cartItems))
  }, [])

  return (
    <>
      <div>
        <h1>My Basket</h1>
        <p>Delivery or pick up available Monday to Friday</p>
        <button>Checkout</button>
      </div>
      {/* <GardenHeader name={name} url={imageHeaderUrl} /> */}
      <CartItem cart={cart} />
    </>
  )
}
