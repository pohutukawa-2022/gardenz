import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { registerSignUp } from './SignUpHelper'

const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long'),
  email: Yup.string().email('Invalid email').required('Required'),
})

function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
      // registerSignUp(values)
    },
    validationSchema: signUpSchema,
  })

  function showAnyErrors(inputName) {
    return formik.errors[inputName] && formik.touched[inputName] ? (
      <p className="inputError">{formik.errors[inputName]}</p>
    ) : null
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-lg ">
        <h1 className="mb-3 font-bold"> Sign Up Form </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First name
            </label>
            {showAnyErrors('firstName')}
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last name
            </label>
            {showAnyErrors('lastName')}
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            {showAnyErrors('email')}
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            {/* <Link
              to="/gardens"
              className="w-full block p-3 text-center rounded-md text-white bg-orange hover:bg-blue hover:bg-blue duration-300"
            >
              Sign Up
            </Link> */}
            <button
              type="submit"
              className="w-full block p-3 text-center rounded-md text-white bg-orange hover:bg-blue hover:bg-blue duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
export default SignUpForm
