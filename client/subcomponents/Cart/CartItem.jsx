import React from 'react'

function CartItem(props) {
  const { name, quantity, price } = props.cart
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  )
}

export default CartItem
