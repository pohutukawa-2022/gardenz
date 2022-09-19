const connection = require('./connection')
const { formatOrderList } = require('./formatter')

module.exports = {
  listOrders,
  addOrder,
  getOrdersByGardenId,
}

async function getOrdersByGardenId(gardenId, db = connection) {
  console.log(gardenId)
  return db('orders_produce')
    .join('orders', 'orders_produce.order_id', 'orders.id')
    .join('produce', 'orders_produce.produce_id', 'produce.id')
    .where('orders.gardens_id', gardenId)
    .select(
      'produce.id as produceId',
      'orders.id as orderId',
      'quantity',
      'created_at as createdAt',
      'status',
      'name',
      'orders.gardens_id as gardenId'
    )
    .then(formatOrderList)
}

async function listOrders(db = connection) {
  return db('orders_produce')
    .join('orders', 'orders_produce.order_id', 'orders.id')
    .join('produce', 'orders_produce.produce_id', 'produce.id')
    .select(
      'produce.id as produceId',
      'orders.id as orderId',
      'quantity',
      'created_at as createdAt',
      'status',
      'name'
    )
    .then(formatOrderList)
}

function addOrder(orderRequest, db = connection) {
  // remove item names from order (we have the id)
  const order = orderRequest.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    }
  })

  const hasInvalidQuantity = order.some((item) => item.quantity === 0)
  if (hasInvalidQuantity) {
    return Promise.reject(
      new Error('INVALID ORDER: Quantity required for all items')
    )
  }

  const timestamp = new Date(Date.now())
  return db('orders')
    .insert({
      created_at: timestamp,
      status: 'pending',
    })
    .then(([id]) => addOrderLines(id, order, db))
}

function addOrderLines(id, order, db = connection) {
  const orderLines = order.map((item) => {
    return {
      order_id: id,
      produce_id: item.id,
      quantity: item.quantity,
    }
  })
  return db('orders_produce')
    .insert(orderLines)
    .then(() => null)
}
