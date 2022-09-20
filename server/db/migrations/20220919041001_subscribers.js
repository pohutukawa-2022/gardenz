exports.up = (knex) => {
  return knex.schema.createTable('subscribers', (table) => {
    table.increments('id').primary()
    table.integer('garden_id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('subscribers')
}
