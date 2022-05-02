exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('garden_produce').del()
  await knex('garden_produce').insert([
    { id: 1, produce_id: 1, garden_id: 1, status: true },
    { id: 2, produce_id: 2, garden_id: 1, status: false },
    { id: 3, produce_id: 3, garden_id: 1, status: true },
    { id: 4, produce_id: 4, garden_id: 2, status: false },
    { id: 5, produce_id: 5, garden_id: 2, status: true },
    { id: 6, produce_id: 6, garden_id: 2, status: true },
    { id: 7, produce_id: 7, garden_id: 3, status: true },
    { id: 8, produce_id: 8, garden_id: 3, status: true },
    { id: 9, produce_id: 9, garden_id: 3, status: false },
    { id: 10, produce_id: 10, garden_id: 4, status: false },
    { id: 11, produce_id: 11, garden_id: 4, status: false },
    { id: 12, produce_id: 12, garden_id: 4, status: true },
    { id: 13, produce_id: 1, garden_id: 5, status: true },
    { id: 14, produce_id: 5, garden_id: 5, status: true },
    { id: 15, produce_id: 7, garden_id: 5, status: true },
    { id: 16, produce_id: 9, garden_id: 5, status: false },
  ])
}
