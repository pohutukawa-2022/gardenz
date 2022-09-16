import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
//import moment from 'moment'

const gallerySchema = Yup.object({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  urlPath: Yup.string().required('Required'),
})

export default function GardenGalleryForm(props) {
  const galleryData = props
  const { title, description, urlPath } = galleryData

  const formik = useFormik({
    initialValues: {
      title,
      description,
      urlPath,
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
          <h2 className="text-2xl">Add To Your Gallery</h2>

          {/* PHOTO TITLE SECTION */}
          <div className="flex flex-col my-5">
            <label htmlFor="title" className="label">
              Photo Title
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}

            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="title"
              name="title"
              type="text"
              placeholder="photo title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>

          {/* PHOTO DESCRIPTION SECTION */}
          <div className="flex flex-col my-5">
            <label htmlFor="description" className="label">
              Description
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}

            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="description"
              name="description"
              type="text"
              placeholder="photo description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>

          {/* PHOTO URL PATH SECTION */}
          <div className="flex flex-col my-5">
            <label htmlFor="urlPath" className="label">
              URL Path
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}

            <input
              className="text-gray-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
              id="urlPath"
              name="urlPath"
              type="text"
              placeholder="photo url path"
              onChange={formik.handleChange}
              value={formik.values.urlPath}
            />
          </div>

          {/* BUTTONS  */}

          <div id="button" className="flex flex-row  my-10">
            <button
              className="w-full py-4 bg-orange
                rounded-lg text-white mx-2"
              type="submit"
            >
              Submit
            </button>
            <button
              className="w-full py-4 bg-orange
                rounded-lg text-white mx-2"
              type="submit"
            >
              Back to Gallery
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
