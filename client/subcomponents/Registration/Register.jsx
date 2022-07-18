import React from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { registerUser } from './registerHelper'
import { useAuth0 } from '@auth0/auth0-react'

import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long'),
  gardenId: Yup.number().required('Required'),
})

export default function Register() {
  const authUser = useAuth0().user
  const navigate = useNavigate()
  const isAdmin = useSelector((globalState) => globalState.user?.isAdmin)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gardenId: '',
    },
    onSubmit: (values) => {
      registerUser(values, isAdmin, authUser, navigate)
    },
    validationSchema: registerSchema,
  })

  function showAnyErrors(inputName) {
    return formik.errors[inputName] && formik.touched[inputName] ? (
      <p className="inputError">{formik.errors[inputName]}</p>
    ) : null
  }
  return (
    <>
      <h2 className="text-2xl">Register to view garden events</h2>
      <section>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="flex flex-col w-full my-5">
            <label htmlFor="firstName" className="text-gray-500 mb-2">
              First Name
            </label>
            {showAnyErrors('firstName')}
            <input
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col w-full my-5">
            <label htmlFor="lastName" className="text-gray-500 mb-2">
              Last Name
            </label>
            {showAnyErrors('lastName')}
            <input
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
            />
          </div>
          <div id="button" className="flex flex-col w-full my-5">
            <button
              type="submit"
              className="w-full py-4 bg-darkGreen rounded-lg text-white"
              data-testid="submitButton"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
