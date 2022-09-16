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
      <div className="field">
        <h1 className="font-bold">Delivery Address</h1>
        <form className="form-content">
          <label>
            Number and Street:
            <input
              className="rounded border-2 border-blue"
              type="text"
              name="street"
              onChange={handleFormChange}
              value={form.street}
            />
          </label>
          <label>
            Suburb:
            <input
              className="rounded border-2 border-blue"
              type="text"
              name="street"
              onChange={handleFormChange}
              value={form.street}
            />
          </label>
          <label>
            City:
            <input
              className="rounded border-2 border-blue"
              type="text"
              name="street"
              onChange={handleFormChange}
              value={form.street}
            />
          </label>
          <label>
            Postal Code:
            <input
              className="rounded border-2 border-blue"
              type="text"
              name="street"
              onChange={handleFormChange}
              value={form.street}
            />
          </label>
          <label>
            Delivery instructions:
            <input
              className="rounded border-2 border-blue"
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
