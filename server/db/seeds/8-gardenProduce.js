/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('garden_produce').del()
  await knex('garden_produce').insert([
    { id: 1, produce_id: 1, garden_id: 1 },
    { id: 2, produce_id: 2, garden_id: 1 },
    { id: 3, produce_id: 3, garden_id: 1 },
    { id: 4, produce_id: 4, garden_id: 2 },
    { id: 5, produce_id: 5, garden_id: 2 },
    { id: 6, produce_id: 6, garden_id: 2 },
    { id: 7, produce_id: 7, garden_id: 3 },
    { id: 8, produce_id: 8, garden_id: 3 },
    { id: 9, produce_id: 9, garden_id: 3 },
    { id: 10, produce_id: 10, garden_id: 4 },
    { id: 11, produce_id: 11, garden_id: 4 },
    { id: 12, produce_id: 12, garden_id: 4 },
    { id: 13, produce_id: 1, garden_id: 5 },
    { id: 14, produce_id: 5, garden_id: 5 },
    { id: 15, produce_id: 7, garden_id: 5 },
    { id: 16, produce_id: 9, garden_id: 5 },
  ])
}
