import React, { useState } from 'react'

function DeliveryForm() {
  const [form, setForm] = useState({
    street: '',
    suburb: '',
    city: '',
    postcode: '',
    deliveryInstruc: '',
  })
  function handleFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <>
      <h1>
        <strong>Delivery Address</strong>
      </h1>
      <form>
        <label>
          Number and Street:
          <input
            type="text"
            name="street"
            onChange={handleFormChange}
            value={form.street}
          />
        </label>
        <label>
          Suburb:
          <input
            type="text"
            name="street"
            onChange={handleFormChange}
            value={form.street}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="street"
            onChange={handleFormChange}
            value={form.street}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="street"
            onChange={handleFormChange}
            value={form.street}
          />
        </label>
        <label>
          Delivery instructions:
          <input
            type="text"
            name="street"
            onChange={handleFormChange}
            value={form.street}
          />
        </label>
      </form>
    </>
  )
}
export default DeliveryForm
