import React, { useState } from 'react'
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

function test() {
  console.log('hit submit')
  return null
}

function DeliveryForm() {
  const [day, setDay] = useState('')
  const navigate = useNavigate()

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
      // navigate('/gardens/:id/shop/payment')
      test()
    },
    // validationSchema: deliverySchema,
  })

  console.log(formik.values)

  // function handleFormChange(event) {
  //   setForm({
  //     ...form,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  // function handleChangeDay(event) {
  //   setDay(event.target.value)
  //   formik.handleChange
  // }

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   navigate('/gardens/:id/shop/payment')
  // }

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
              <option name="deliveryDay" value="monday">
                Monday
              </option>
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
            {showAnyErrors('street')}
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="street"
              onChange={formik.handleChange}
              value={formik.values.street}
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
            {showAnyErrors('suburb')}
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="suburb"
              onChange={formik.handleChange}
              value={formik.values.suburb}
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
            {showAnyErrors('city')}
            <input
              className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
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
              onChange={formik.handleChange}
              value={formik.values.postcode}
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
            {showAnyErrors('deliveryInstructions')}
            <input
              className="h-full appearance-none block w-full bg-white-200 text-gray-700 border-2 border-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="deliveryInstructions"
              onChange={formik.handleChange}
              value={formik.values.deliveryInstructions}
            />
          </div>
        </div>
      </form>
      <div>
        <button
          type="submit"
          className="mt-5 bg-orange hover:bg-blue-700 text-darkBlue font-bold py-2 px-4 rounded"
        >
          Check out
        </button>
      </div>
    </>
  )
}
export default DeliveryForm
