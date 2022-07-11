import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'

import { formButtonVariants } from '../../../views/animationVariants'

const gardenSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
})

export default function GardenForm(props) {
  const event = props.formData
  const { name, description, address } = event
  const formik = useFormik({
    initialValues: {
      name,
      description,
      address,
    },
    onSubmit: (values) => {
      props.submitGarden({
        ...values,
      })
    },
    validationSchema: gardenSchema,
  })

  function handleCancel(e) {
    e.preventDefault()
    props.cancelSubmit()
  }

  return (
    <>
      <main>
        <h2 className="form-title">{props.action}</h2>
        <form className="form-content" onSubmit={formik.handleSubmit}>
          <section className="field">
            <label htmlFor="name" className="label">
              Garden name
            </label>
            {formik.errors.name && formik.touched.name ? (
              <p className="inputError">{formik.errors.name}</p>
            ) : null}
            <input
              className="form-box"
              id="name"
              name="name"
              type="text"
              placeholder="Garden name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <label htmlFor="description" className="label">
              Description
            </label>
            {formik.errors.description && formik.touched.description ? (
              <p className="inputError">{formik.errors.description}</p>
            ) : null}
            <textarea
              className="description-box"
              type="text"
              id="description"
              name="description"
              placeholder="Garden description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />

            <label htmlFor="address" className="label">
              Garden address
            </label>
            {formik.errors.address && formik.touched.address ? (
              <p className="inputError">{formik.errors.address}</p>
            ) : null}
            <input
              className="form-box"
              id="address"
              name="address"
              type="text"
              placeholder="Garden address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </section>

          <section className="button-group">
            {props.action === 'Update Garden' ? (
              <motion.button
                className="submit form-box"
                onClick={handleCancel}
                variants={formButtonVariants}
                whileHover="hover"
              >
                Cancel garden
              </motion.button>
            ) : null}

            <motion.button
              className="submit form-box"
              type="submit"
              variants={formButtonVariants}
              whileHover="hover"
            >
              Submit
            </motion.button>
          </section>
        </form>
      </main>
    </>
  )
}
