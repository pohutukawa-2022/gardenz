exports.up = (knex) => {
  return knex.schema.alterTable('gardens', (table) => {
    table.string('email')
    table.string('phone')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('gardens')
}
