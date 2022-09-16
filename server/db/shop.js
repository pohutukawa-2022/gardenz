const connection = require('./connection')

// function getAllProduce(db = connection) {
//   return db('produce')
//     .join('produce_types', 'produce.produce_type_id', 'produce_types.id')
//     .select('produce.id', 'produce.name', 'produce_types.name as produceType')
// }

function productsForGarden(id, db = connection) {
  return db('garden_shop')
    .join('shop_products', 'garden_shop.id', 'shop_products.id')
    .where('garden_shop.id', id)
    .then((data) => {
      data[0]['productId'] = data[0]['shop_products_id']
      delete data[0]['shop_products_id']
      delete data[0]['garden_id']
      return [{...data[0]}]
    })
}

module.exports = { productsForGarden }
