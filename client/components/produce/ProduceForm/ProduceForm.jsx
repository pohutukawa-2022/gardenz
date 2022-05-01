import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import { motion } from 'framer-motion'

import { formButtonVariants } from '../../../pages/animationVariants'

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
    <>
      <div>
        <h2 className="form-title">{props.action}</h2>
        <form className="form-content" onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="title" className="label">
              Produce Name
            </label>
            {formik.errors.title && formik.touched.title ? (
              <p className="inputError">{formik.errors.title}</p>
            ) : null}
            <input
              className="form-box"
              id="title"
              name="title"
              type="text"
              placeholder="produce name"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
              <label>
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
            </label>   <label>
              <Field type="checkbox" name="checked" value="Two" />
              Kingsland Community 
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Kelmarna Gardens
            </label>
           
            <div id="my-radio-group">Picked</div>
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
            
          </div>

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
        </form>
      </div>
    </>
  )
}


{/* <div id="checkbox-group">Checked</div>
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
          </div> */}

        //   <Form>
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
        // </Form>