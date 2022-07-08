import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { formButtonVariants } from '../../../views/animationVariants'

const eventSchema = Yup.object({
  name: Yup.string().required('Required'),
  gardenIds: Yup.array().min(1, 'At least one garden should be selected'),
  produceType: Yup.string().required('Required'),
})

export default function ProduceForm({
  submitProduce,
  gardens,
  produceTypes,
  initialFormData,
  action,
}) {
  return (
    <>
      <div>
        <h2 className="form-title">{action}</h2>
        <Formik
          initialValues={initialFormData}
          validationSchema={eventSchema}
          onSubmit={(values) => {
            submitProduce(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-content">
              <div className="field">
                <label htmlFor="name" className="label">
                  Produce Name
                </label>
                <Field
                  className="form-box"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="produce name"
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <label htmlFor="garden" className="label">
                  Produce Family
                </label>
                {errors.produceType && touched.produceType ? (
                  <div>{errors.produceType}</div>
                ) : null}
                <Field
                  id="produceType"
                  name="produceType"
                  placeholder="produce name"
                >
                  {({ field }) => (
                    <select {...field}>
                      <option value=""></option>
                      {produceTypes.map(({ id, name }) => (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
              </div>

              <ul role="gardenList">
                {gardens?.length ? (
                  gardens.map((garden) => {
                    return (
                      <li key={garden.id}>
                        <Field
                          value={garden.id.toString()}
                          type="checkbox"
                          name="gardenIds"
                        />
                        {errors.gardenIds && touched.gardenIds ? (
                          <div>{errors.gardenIds}</div>
                        ) : null}
                        {garden.name}
                      </li>
                    )
                  })
                ) : (
                  <p>No produce yet</p>
                )}
              </ul>

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
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}
