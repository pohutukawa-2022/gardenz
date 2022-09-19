import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useForm } from 'react-hook-form'

function DeliveryForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  function handleFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm();
  // const onSubmit = (values) => alert(JSON.stringify(values, null, 2))

  return (
    <>
      <form className="w-full max-w-lg">
        <h1 className="mb-3 font-bold"> Sign Up Form </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-number-street"
            >
              First name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="firstName"
              placeholder="Names"
              onChange={handleFormChange}
              value={form.firstName}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-suburb"
            >
              Last name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="lastName"
              onChange={handleFormChange}
              value={form.lastName}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-instructions"
            >
              Email address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="email"
              onChange={handleFormChange}
              value={form.email}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Link
              to="/gardens"
              className="w-full block p-3 text-center rounded-md text-white bg-orange hover:bg-blue hover:bg-blue duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}
export default DeliveryForm
