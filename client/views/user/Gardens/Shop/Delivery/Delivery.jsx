import React, { useState } from 'react'
import DeliveryForm from '../../../../../subcomponents/Delivery/DeliveryForm'

// import 'react-dropdown/style.css'

function Delivery() {
  const [form, setForm] = useState(true)

  const [selected, setSelected] = useState('checked')

  function handleCheck(event) {
    setSelected(event.target.value)
  }

  function handleChange() {
    return setForm(true)
  }
  function handleChange2() {
    return setForm(false)
  }

  return (
    <div>
      <div className="rounded-lg border-2 mx-80 my-20 w-full max-w-lg p-16 shadow-md">
        <div>
          <div className="flex items-center mb-4 font-sans">
            <input
              onClick={() => handleChange()}
              id="default-radio-1"
              type="radio"
              value="checked"
              checked={selected === 'checked'}
              onChange={handleCheck}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="font-bold ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delivery
            </label>
          </div>
          <div className="flex items-center mb-4 font-sans">
            <input
              onClick={() => handleChange2()}
              id="default-radio-1"
              type="radio"
              value="maybe"
              checked={selected === 'maybe'}
              onChange={handleCheck}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="font-bold ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Pick up
            </label>
          </div>
        </div>
        {form ? <DeliveryForm /> : 'pick up available Monday to Friday '}
      </div>
    </div>
  )
}

export default Delivery
