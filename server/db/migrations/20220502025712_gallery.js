exports.up = function (knex) {
  return knex.schema.createTable('gallery', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('mimetype')
    table.binary('image')
    table.integer('garden_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('gallery')
}
