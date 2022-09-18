import React from 'react'

function CartItem(props) {
  const { name, quantity, price } = props.cart
  return (
    <table>
      <thead>
        <tbody>{name}</tbody>
        <tbody>{quantity}</tbody>
        <tbody>{price}</tbody>
      </thead>
    </table>
  )
}

export default CartItem
