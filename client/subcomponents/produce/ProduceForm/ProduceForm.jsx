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
      <section>
        <h2 className="form-title">{props.action}</h2>
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
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <label htmlFor="garden" className="label">
                  Produce Family
                </label>
                {errors.produceType && touched.produceType ? (
                  <p>{errors.produceType}</p>
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

              <ul>
                {gardens?.length ? (
                  gardens.map((garden) => {
                    return (
                      <li key={garden.id} value="hello">
                        <Field
                          value={garden.id.toString()}
                          type="checkbox"
                          name="gardenIds"
                        />
                        {errors.gardenIds && touched.gardenIds ? (
                          <p>{errors.gardenIds}</p>
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
      </section>
    </>
  )
}
