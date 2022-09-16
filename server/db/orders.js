const connection = require('./connection')
const { formatOrderList } = require('./formatter')

module.exports = {
  listOrders,
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
