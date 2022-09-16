import React, { useState, useEffect } from 'react'
import DeliveryForm from '../../../../../subcomponents/ Delivery/DeliveryForm'

function Delivery() {
  const [form, setForm] = useState(true)

  function handleChange() {
    return setForm(!form)
  }

  return (
    <>
      <button onClick={() => handleChange()}>Click</button>
      <br />
      {form ? (
        <DeliveryForm />
      ) : (
        'Please come to the garden for pick up, we are open every Tuesday. Tel: 1234567 '
      )}
    </>
  )
}

export default Delivery
