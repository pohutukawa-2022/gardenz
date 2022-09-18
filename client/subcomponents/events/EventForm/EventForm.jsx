import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

const eventSchema = Yup.object({
  title: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  volunteersNeeded: Yup.number().required('Required'),
  description: Yup.string().required('Required'),
})

// the date format which browsers understand
const browserDateFormat = 'yyyy-MM-DD'
const nzDateFormat = 'DD/MM/yyyy'

export default function EventForm(props) {
  const event = props.formData
  const { title, date, volunteersNeeded, description } = event
  const formik = useFormik({
    initialValues: {
      title,
      date: moment(date, nzDateFormat).format(browserDateFormat),
      volunteersNeeded,
      description,
    },
    onSubmit: (values) => {
      props.submitEvent({
        ...values,
        date: moment(values.date).format(nzDateFormat),
      })
    },
    validationSchema: eventSchema,
  })

  function handleCancel(e) {
    e.preventDefault()
    props.cancelSubmit()
  }

  return (
    <div className="flex flex-row my-20 justify-center">
      <section className="w-1/4">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-2xl">{props.action}</h2>
          <div className="flex flex-col my-5">
            <label htmlFor="title" className="label">
              Event Title
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}
            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="title"
              name="title"
              type="text"
              placeholder="event title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>

          <div className="flex flex-col  my-5">
            <label htmlFor="date" className="label">
              Date
            </label>
            {formik.errors.date && formik.touched.date ? (
              <p className="inputError">{formik.errors.date}</p>
            ) : null}
            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="date"
              name="date"
              type="date"
              role="date"
              placeholder="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </div>

          <div className="flex flex-col  my-5">
            <label htmlFor="volunteersNeeded" className="label">
              Volunteers Needed
            </label>
            {formik.errors.volunteersNeeded &&
            formik.touched.volunteersNeeded ? (
              <p className="inputError">{formik.errors.volunteersNeeded}</p>
            ) : null}
            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="volunteersNeeded"
              name="volunteersNeeded"
              type="number"
              placeholder="volunteers needed"
              min="0"
              onChange={formik.handleChange}
              value={formik.values.volunteersNeeded}
            />
          </div>

          <div className="flex flex-col  my-5">
            <label htmlFor="description" className="label">
              Description
            </label>
            {formik.errors.description && formik.touched.description ? (
              <p className="inputError">{formik.errors.description}</p>
            ) : null}
            <textarea
              className="resize-none text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="description"
              name="description"
              placeholder="event description"
              onChange={formik.handleChange}
              value={formik.values.description}
              rows={6}
            />
          </div>

          <div id="button" className="flex flex-col  my-10">
            <button
              className=" py-4 bg-lightGreen
                rounded-lg text-white"
              type="submit"
            >
              Submit
            </button>
            {props.action === 'Update Event' ? (
              <button
                className="py-4 bg-orange
                rounded-lg text-white  my-5"
                onClick={handleCancel}
              >
                Cancel Event
              </button>
            ) : null}
          </div>
        </form>
      </section>
    </div>
  )
}
