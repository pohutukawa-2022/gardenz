const connection = require('./connection')

function getProductsByGarden(gardenId, db = connection) {
  return db('garden_shop')
    .join('shop_products', 'garden_shop.id', 'shop_products.id')
    .where('garden_shop.garden_id', gardenId)
    .select(
      'shop_products.id as productId',
      'description',
      'price',
      'image',
      'stock',
      'name'
    )
}

module.exports = { getProductsByGarden }
