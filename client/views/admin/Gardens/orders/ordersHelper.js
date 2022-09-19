import requestor from '../../../../consume'

export async function fetchOrdersByGarden(id, consume = requestor) {
  const token = ''
  try {
    const res = await consume(`/gardens/${id}/orders`, token, 'get')
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}
