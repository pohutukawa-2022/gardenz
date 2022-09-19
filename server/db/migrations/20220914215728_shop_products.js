exports.up = function (knex) {
  return knex.schema.createTable('shop_products', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.integer('price')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('shop_products')
}
