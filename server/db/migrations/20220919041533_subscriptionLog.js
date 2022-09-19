exports.up = (knex) => {
  return knex.schema.createTable('subscriptionLog', (table) => {
    table.increments('id')
    table.integer('garden_id').references('gardens.id')
    table.integer('user_id').references('user.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('subscriptionLog')
}
