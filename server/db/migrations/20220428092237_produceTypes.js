exports.up = function (knex) {
  return knex.schema.createTable('produce_types', (table) => {
    table.increments('id')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('produce_types')
}
