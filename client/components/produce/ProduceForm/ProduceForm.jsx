import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { formButtonVariants } from '../../../pages/animationVariants'
import { getAllGardens } from '../../../pages/Gardens/gardensHelper'
import { getProduceTypes } from './ProduceFormHelper'
import { useDispatch } from 'react-redux'
import { showError } from '../../../actions/error'

const eventSchema = Yup.object({
  name: Yup.string().required('Required'),
  gardenIds: Yup.array().min(1, 'At least one garden should be selected'),
})

export default function ProduceForm(props) {
  const dispatch = useDispatch()
  const [gardens, setGardens] = useState([])
  const [produceTypes, setProduceTypes] = useState([])

  useEffect(() => {
    getProduceTypes()
      .then((types) => {
        setProduceTypes(types)
        return null
      })
      .catch((error) => {
        dispatch(showError(error))
      })
    getAllGardens()
      .then((gardens) => {
        setGardens(gardens.map((garden) => ({ ...garden, checked: false })))
        return null
      })
      .catch((error) => {
        dispatch(showError(error))
      })
  }, [])

  const produceItem = props.formData
  const { name, produceType, gardenIds } = produceItem

  return (
    <>
      <div>
        <h2 className="form-title">{props.action}</h2>
        <Formik
          initialValues={{
            name,
            produceType,
            gardenIds,
          }}
          validationSchema={eventSchema}
          onSubmit={async (values) => {
            alert(JSON.stringify(values, null, 2))
          }}
        >
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
              <label htmlFor="garden" className="label">
                Produce Family
              </label>
              <Field id="name" name="produceType" placeholder="produce name">
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
                      {garden.name}
                    </li>
                  )
                })
              ) : (
                <p>No produce yet</p>
              )}
            </ul>

            <div className="button-group">
              {props.action === 'Update Event' ? (
                <motion.button
                  className="submit form-box"
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
          </Form>
        </Formik>
      </div>
    </>
  )
}
