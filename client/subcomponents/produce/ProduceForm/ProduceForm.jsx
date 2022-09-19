import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

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
      <section className=''>
        <h2 className="form-title text-center text-2xl pt-20 font-bold font-serif">{action}</h2>
        <Formik
          initialValues={initialFormData}
          validationSchema={eventSchema}
          onSubmit={(values) => {
            submitProduce(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-content container mx-auto px-4 bg-pink z-12">
              <div className="field text-xl flex mb-20">
                <div className='mr-20'>
                  <label htmlFor="name" className="label block">
                    Produce Name
                  </label>
                
                <Field
                  className="form-box"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="produce name"
                />
                {errors.name && touched.name ? <p className='text-red'>{errors.name}</p> : null}
                </div>
                <div>
                <label htmlFor="garden" className="label block">
                  Produce Family
                </label>
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
                {errors.produceType && touched.produceType ? (
                  <p className='text-red'>{errors.produceType}</p>
                ) : null}
                </div>
              </div>

              <ul>
                {gardens?.length ? (
                  gardens.map((garden) => {
                    return (
                      <li key={garden.id} value="hello" className="flex justify-center">
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
                <button className="submit form-box block w-32 mt-5 p-3 text-center container mx-auto px-4 rounded-md text-white bg-orange transition ease-in-out hover:bg-orange hover:-translate-y-1 hover:scale-110 duration-300" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </>
  )
}
