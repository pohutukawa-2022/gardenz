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
      <div className="p">
        <h1 className="font-bold">Delivery Address</h1>
        <form>
          <label>
            Number and Street:
            <input
              className="rounded border-2 border-teal-400"
              type="text"
              name="street"
              onChange={handleFormChange}
              value={form.street}
            />
          </label>
          <label>
            Suburb:
            <input
              className="rounded border-2 border-{rgb(153 221 204)}-400}"
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
      </div>
    </>
  )
}
export default DeliveryForm
