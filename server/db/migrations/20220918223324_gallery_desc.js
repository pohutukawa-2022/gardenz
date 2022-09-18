exports.up = function (knex) {
  return knex.schema.alterTable('gallery', (table) => {
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('gallery', (table) => {
    table.dropColumn('description')
  })
}
