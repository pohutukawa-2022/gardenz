import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
//import moment from 'moment'
import { Link } from 'react-router-dom'

const gallerySchema = Yup.object({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  urlPath: Yup.string()
    .matches(
      /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
      'Enter correct url!'
    )
    .required('Required'),
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
              placeholder="photo description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>

          <div className="flex flex-col my-5">
            <label htmlFor="urlPath" className="label">
              URL Path
            </label>
            {formik.errors.urlPath && formik.touched.urlPath ? (
              <p style={{ color: 'red' }} className="inputError">
                {formik.errors.urlPath}
              </p>
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
