import CartItem from '../../../../../subcomponents/Cart/CartItem'
import React, { useEffect, useState } from 'react'
import GardenHeader from '../../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../../hooks/useGarden'
import { Link, Outlet, useParams } from 'react-router-dom'

export default function Cart() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  // const { name, imageHeaderUrl } = banner
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cartDummy = { name: 'Large Mixed Box', quantity: 2, price: '$40' }
    localStorage.setItem('cart', JSON.stringify(cartDummy))
    const cartItems = localStorage.getItem('cart')
    setCart(JSON.parse(cartItems))
  }, [])

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <div className="lg: flex flex-row text-center md:text-align">
        <h1
          className=" mt-12 ml-8 pl-20 text-2xl font-serif font-bold text-darkBlue
        "
        >
          My Basket
        </h1>
        <p className="mt-14 ml-4 text-zinc-400 font-bold">
          Delivery or pick up available Monday to Friday
        </p>
        <button>
          <Link to="/gardens/:id/shop/cart">Go to cart</Link>
          <Outlet />
        </button>
      </div>

      <CartItem cart={cart} />
    </>
  )
}
