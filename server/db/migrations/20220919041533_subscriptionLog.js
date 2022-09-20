exports.up = (knex) => {
  return knex.schema.createTable('subscriptionLog', (table) => {
    table.increments('id')
    table.integer('garden_id')
    table.integer('user_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('subscriptionLog')
}
