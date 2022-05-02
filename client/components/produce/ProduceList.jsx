import React from 'react'
import Produce from '../../pages/Produce/Produce'
import garden from '../../reducers/garden'

export default ProduceList ({ produce, id }) {
  return( 
    <>
    <ul>{produce.map  (produce) => {
      <li>produce</li>
    }}</ul>
    </>
  )
}