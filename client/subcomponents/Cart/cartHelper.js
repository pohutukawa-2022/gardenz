import { getProduce } from '../produce/ProduceList/produceHelper'
import requestor from '../../../consume'
import { useDispatch, useSelector } from 'react-redux'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'
import { useEffect } from 'react'

// OPERATION STEPPINGSTONE
const fakeData = [{
  productId: 22, 
  name: 'test',
  price: '$30'
  quantity: 1,

}]
//fakeData will be called order: its values will be: product.id, product.name, product.price, qty

export async function fetchProduce() {
  const dispatch = useDispatch()
  // const produce = useSelector((state) => state.produce)

  useEffect(() => {
    ;async () => {
      await getProduce()
    }
  }, [])
}
