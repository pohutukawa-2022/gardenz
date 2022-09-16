import { getProduce } from '../produce/ProduceList/produceHelper'
// import requestor from '../../consume'
import { setWaiting, clearWaiting } from '../../slices/waiting'
import { showError } from '../../slices/error'
import { useEffect, useState } from 'react'
import { dispatch } from '../../store'

// OPERATION SECRETSTONE

const fakeCart = [
  {
    productId: 22,
    name: 'test',
    price: '$30',
    quantity: 1,
  },
]

//fakeCart will be called order: its values will be: product.id, product.name, product.price, qty

// make function fetchProduce
// define the initial state of the cart using useState
// inside fetchProduce chnage the initial state of the cart by calling getProduce
// create a useEffect
// pass the function that calls getProduce into the useEffect
// export fetchProduce

export async function fetchProduce() {
  const [fakeCart, setFakeCart] = useState([])
  dispatch(setWaiting())
  useEffect(() => {
    ;async () => {
      try {
        dispatch(clearWaiting())
        await getProduce()
        ;(cart) => {
          setFakeCart(cart)
        }
      } catch (error) {
        dispatch(showError(error.message))
      }
    }
  }, [])
}

// const cartItems = await getProduce()
// setFakeCart(cartItems)

// const cartItems = Promise.resolve(fakeCart)
// setFakeCart(cartItems)