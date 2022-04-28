/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('garden_produce', (table) => {
    table.increments('id')
    table.integer('produce_id').references('produce.id')
    table.integer('garden_id').references('gardens.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('garden_produce')
}
