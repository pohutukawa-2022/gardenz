/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('produce', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('produce_type_id').references('produce_types.id')
    table.boolean('status')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('produce')
}
