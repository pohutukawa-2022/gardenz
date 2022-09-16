exports.up = (knex) => {
  return knex.schema.createTable('orders_produce', (table) => {
    table.integer('produce_id').references('produce.id')
    table.integer('order_id').references('orders.id')
    table.integer('quantity')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('orders_produce')
}
