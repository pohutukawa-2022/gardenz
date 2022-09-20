import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const deliverySchema = Yup.object().shape({
  street: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  suburb: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long'),
  city: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long'),
  postcode: Yup.string()
    .required('Required')
    .min(4, 'This must be at least 4 characters long')
    .max(6, 'Sorry, this must be under 6 characters long'),
})

function DeliveryForm() {
  const navigate = useNavigate()

  //localStorageData
  //setting localStorage

  const dataRecieved = {
    productId: 1,
    name: 'product_name',
    price: 'priceofProduct',
    quantity: 'amount_bought',
  }

  // const [form, setForm] = useState({
  //   street: '',
  //   suburb: '',
  //   city: '',
  //   postcode: '',
  //   deliveryInstructions: '',
  //   deliveryDay: day,
  // })

  function showAnyErrors(inputName) {
    return formik.errors[inputName] && formik.touched[inputName] ? (
      <p className="inputError">{formik.errors[inputName]}</p>
    ) : null
  }

  const formik = useFormik({
    initialValues: {
      street: '',
      suburb: '',
      city: '',
      postcode: '',
      deliveryInstructions: '',
      deliveryDay: '',
    },
    onSubmit: () => {
      navigate('/gardens/:id/shop/payment')
    },
    validationSchema: deliverySchema,
  })

  console.log(formik.values)
  //LocalStorage
  //cart recieved
  localStorage.setItem('cart', JSON.stringify(dataRecieved))

  //formik values
  localStorage.setItem('deliveryDetails', JSON.stringify(formik.values))

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-1/2 m-5">
          <label>
            Select a delivery day
            <select
              name="deliveryDay"
              value={formik.values.deliveryDay}
              onChange={formik.handleChange}
            >
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
            </select>
          </label>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-number-street"
            >
              Number and Street
            </label>
            <div className="text-red text-xs">{showAnyErrors('street')}</div>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="street"
              placeholder="street"
              onChange={formik.handleChange}
              value={formik.values.street}
              placeholder="street"
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
            <div className="text-red text-xs">{showAnyErrors('suburb')}</div>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="suburb"
              placeholder="suburb"
              onChange={formik.handleChange}
              value={formik.values.suburb}
              placeholder="suburb"
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
            <div className="text-red text-xs">{showAnyErrors('city')}</div>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="city"
              placeholder="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              placeholder="city"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-postcode"
            >
              Postal Code
            </label>
            <div className="text-red text-xs">{showAnyErrors('postcode')}</div>
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="postcode"
              placeholder="postcode"
              onChange={formik.handleChange}
              value={formik.values.postcode}
              placeholder="postcode"
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
              onChange={formik.handleChange}
              value={formik.values.deliveryInstructions}
              placeholder="deliveryInstructions"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="mt-5 bg-orange hover:bg-blue-700 text-darkBlue font-bold py-2 px-4 rounded"
          >
            Check out
          </button>
        </div>
      </form>
    </>
  )
}
export default DeliveryForm
