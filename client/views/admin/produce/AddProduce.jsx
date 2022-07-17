import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProduceTypes } from './AddProduceHelper'
import { getAllGardens } from '../../../views/user/Gardens/Index/IndexHelper'
import { showError } from '../../../slices/error'

import ProduceForm from '../../../subcomponents/produce/ProduceForm/ProduceForm'

export default function AddProduce() {
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

  function submitProduce(produce) {
    // TODO: add real functionality to submit button
    // addProduce(produce)
    // navigate()
    alert(JSON.stringify(produce))
  }

  const initialFormData = {
    name: '',
    produceType: 0,
    gardenIds: [],
  }

  return (
    <ProduceForm
      initialFormData={initialFormData}
      action="Add Produce"
      submitProduce={submitProduce}
      gardens={gardens}
      produceTypes={produceTypes}
    />
  )
}
