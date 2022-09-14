exports.up = function (knex) {
  return knex.schema.createTable('garden_shop', (table) => {
    table.increments('id')
    table.integer('garden_id').references('gardens.id')
    table.integer('shop_products_id').references('shop_products.id')
    table.integer('stock')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('garden_shop')
}
