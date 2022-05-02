import React from 'react'
import { useFormik, Field } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import { motion } from 'framer-motion'

import { formButtonVariants } from '../../../pages/animationVariants'

const eventSchema = Yup.object({
  name: Yup.string().required('Required'),
  //required here
})

export default function ProduceForm(props) {
  const event = props.formData
  const { name } = event
  const formik = useFormik({
    initialValues: {
      name,
    },
    onSubmit: (values) => {
      props.submitEvent({
        ...values,
      })
    },
    validationSchema: eventSchema,
  })

  function handleCancel(e) {
    e.preventDefault()
    props.cancelSubmit()
  }
  const options = [
    { value: 'legumes', label: 'Legumes' },
    { value: 'leafy-greens', label: 'Leafy Greens' },
    { value: 'vegetables', label: 'Root Vegetables' },
  ]

  return (
    <>
      <div>
        <h2 className="form-title">{props.action}</h2>
        <form className="form-content" onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label">
              Produce Name
            </label>
            {formik.errors.name && formik.touched.name ? (
              <p className="inputError">{formik.errors.name}</p>
            ) : null}
            <input
              className="form-box"
              id="name"
              name="name"
              type="text"
              placeholder="produce name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <label htmlFor="garden" className="label">
              Produce Family
            </label>
            {/* {showAnyErrors('garden')} */}
            <select
              className="form-box"
              name="gardenId"
              id="produceType"
              onChange={formik.handleChange}
            >
              <option hidden>Select from this list</option>
              {options.map((option) => {
                console.log(option)
                return (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                )
              })}
            </select>
            {/* <label>
              <Field type="checkbox" name="checked" value="One" />
              Auckland Teaching
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Devonport Community
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Owairaka Community
            </label>{' '}
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Kingsland Community
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Kelmarna Gardens
            </label> */}
            {/* <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="One" />
                One
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                Two
              </label>
              <div>Picked: {values.picked}</div>
            </div>
          </div> */}

            <div className="button-group">
              {props.action === 'Update Event' ? (
                <motion.button
                  className="submit form-box"
                  onClick={handleCancel}
                  variants={formButtonVariants}
                  whileHover="hover"
                >
                  Cancel Event
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
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

{
  /* <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div> */
}

{
  /* //   <Form>
//   <div id="my-radio-group">Picked</div>
//   <div role="group" aria-labelledby="my-radio-group">
//     <label>
//       <Field type="radio" name="picked" value="One" />
//       One
//     </label>
//     <label>
//       <Field type="radio" name="picked" value="Two" />
//       Two
//     </label>
//     <div>Picked: {values.picked}</div>
//   </div>

//   <button type="submit">Submit</button>
// </Form> */
}
