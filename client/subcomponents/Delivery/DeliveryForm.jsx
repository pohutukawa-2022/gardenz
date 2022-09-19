import React, { useState } from 'react'

function DeliveryForm() {
  const [form, setForm] = useState({
    street: '',
    suburb: '',
    city: '',
    postcode: '',
    deliveryInstructions: '',
  })
  function handleFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <>
      <form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-number-street"
            >
              Number and Street
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="street"
              onChange={handleFormChange}
              value={form.street}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-suburb"
            >
              Suburb
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="suburb"
              onChange={handleFormChange}
              value={form.suburb}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="city"
              onChange={handleFormChange}
              value={form.city}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-postcode"
            >
              Postal Code
            </label>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="postcode"
              onChange={handleFormChange}
              value={form.postcode}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-instructions"
            >
              Delivery Instructions
            </label>
            <input
              className="h-full appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="deliveryInstructions"
              onChange={handleFormChange}
              value={form.deliveryInstructions}
            />
          </div>
        </div>
      </form>
    </>
  )
}
export default DeliveryForm
