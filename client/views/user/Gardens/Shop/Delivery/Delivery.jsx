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
      {form ? <DeliveryForm /> : 'pickup form'}
    </>
  )
}

export default Delivery
