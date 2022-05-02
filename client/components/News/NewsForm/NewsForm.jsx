import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'

import { formButtonVariants } from '../../../pages/animationVariants'

const createdDate = () => new Date().toLocaleDateString('en-NZ')

const newsSchema = Yup.object({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
})

export default function NewsForm(props) {
  const news = props.formData
  const { title, content } = news
  const formik = useFormik({
    initialValues: {
      title,
      content,
    },
    onSubmit: (values) => {
      props.submitNews({
        createdOn: createdDate(),
        ...values,
      })
    },
    validationSchema: newsSchema,
  })

  return (
    <>
      <div>
        <h2 className="form-title">{props.action}</h2>
        <form className="form-content" onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="title" className="label">
              News Title
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}
            <input
              className="form-box"
              id="title"
              name="title"
              type="text"
              placeholder="news title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />

            <label htmlFor="content" className="label">
              Content
            </label>
            {formik.errors.content && formik.touched.content ? (
              <p className="inputError">{formik.errors.content}</p>
            ) : null}
            <textarea
              className="content-box"
              id="content"
              name="content"
              placeholder="news content"
              onChange={formik.handleChange}
              value={formik.values.content}
            />
          </div>

          <div className="button-group">
            <motion.button
              className="submit form-box"
              type="submit"
              variants={formButtonVariants}
              whileHover="hover"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </>
  )
}
