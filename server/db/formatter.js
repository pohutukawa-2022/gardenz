module.exports = {
  formatOrder,
  formatOrderList,
}

function createDateTimeString(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleTimeString() + ', ' + date.toDateString()
}

function createOrder(orderLine) {
  return {
    id: orderLine.orderId,
    createdAt: createDateTimeString(orderLine.createdAt),
    status: orderLine.status,
    produce: [createProduce(orderLine)],
  }
}

function createProduce(orderLine) {
  return {
    id: orderLine.produceId,
    name: orderLine.name,
    quantity: orderLine.quantity,
  }
}

function sortByIdAscending(arr) {
  arr.sort((a, b) => {
    return a.id - b.id
  })
  return arr
}

function sortByIdDescending(arr) {
  arr.sort((a, b) => {
    return b.id - a.id
  })
  return arr
}

function formatOrder(orderLines) {
  let order
  orderLines.forEach((item) => {
    !order
      ? (order = createOrder(item))
      : order.produce.push(createProduce(item))
  })
  order.produce = sortByIdAscending(order.produce)
  return order
}

function formatOrderList(orderLines) {
  const orderList = []
  orderLines.forEach((item) => {
    const order = orderList.find((o) => o.id === item.orderId)
    !order
      ? orderList.push(createOrder(item))
      : (order.produce = sortByIdAscending([
          ...order.produce,
          createProduce(item),
        ]))
  })
  return sortByIdDescending(orderList)
}
