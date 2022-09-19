import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const gallerySchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  url: Yup.string()
    .matches(
      /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim,
      'Not a valid image url!'
    )
    .required('Required'),
})

export default function GardenGalleryForm(props) {
  const galleryData = props
  const { name, description, url } = galleryData

  const formik = useFormik({
    initialValues: {
      name,
      description,
      url,
    },
    onSubmit: (values) => {
      props.submitEvent({
        ...values,
      })
    },

    validationSchema: gallerySchema,
  })

  return (
    <div className="flex flex-row my-20 justify-center">
      <section className="w-1/4">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-2xl">Update Gallery Image</h2>

          <div className="flex flex-col my-5">
            <label htmlFor="name" className="label">
              Photo name
            </label>
            {formik.errors.name && formik.touched.name ? (
              <p className="inputError">{formik.errors.name}</p>
            ) : null}

            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name || props.name || ''}
            />
          </div>

          <div className="flex flex-col my-5">
            <label htmlFor="description" className="label">
              Description
            </label>
            {formik.errors.description && formik.touched.description ? (
              <p className="inputError">{formik.errors.description}</p>
            ) : null}

            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description || props.description || ''}
            />
          </div>

          <div className="flex flex-col my-5">
            <label htmlFor="url" className="label">
              URL Path
            </label>
            {formik.errors.url && formik.touched.url ? (
              <p style={{ color: 'red' }} className="inputError">
                {formik.errors.url}
              </p>
            ) : null}

            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="url"
              name="url"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.url || props.url || ''}
            />
          </div>

          <div className="flex flex-row  my-10">
            <button
              className="w-full py-4 bg-orange
                rounded-lg text-white mx-2"
              type="submit"
              data-testid="button"
              label="submit-button"
              name="submit"
            >
              Submit
            </button>
            <button
              className="w-full py-4 bg-orange
                rounded-lg text-white mx-2"
            >
              <Link to={`/admin/gardens/${props.id}/gallery`}>
                Back to Gallery
              </Link>
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
