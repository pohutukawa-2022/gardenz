import requestor from '../../../../consume'

export async function fetchOrdersByGarden(id, consume = requestor) {
  const token = ''
  try {
    return await consume(`/garden/${id}/orders`, token, 'get')
  } catch (err) {
    console.error(err.message)
  }
}
