/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('produce').del()
  await knex('produce').insert([
    { id: 1, name: 'Strawberry', produce_type_id: 2, status: true },
    { id: 2, name: 'Celery', produce_type_id: 5, status: false },
    { id: 3, name: 'Brocolli', produce_type_id: 1, status: false },
    { id: 4, name: 'Lemon', produce_type_id: 2, status: true },
    { id: 5, name: 'Kiwifruit', produce_type_id: 2, status: false },
    { id: 6, name: 'Tomato', produce_type_id: 1, status: false },
    { id: 7, name: 'Cucumber', produce_type_id: 1, status: true },
    { id: 8, name: 'Watermelon', produce_type_id: 2, status: false },
    { id: 9, name: 'Green peas', produce_type_id: 3, status: true },
    { id: 10, name: 'Oats', produce_type_id: 4, status: false },
    { id: 11, name: 'Black beans', produce_type_id: 3, status: false },
    { id: 12, name: 'Parsley', produce_type_id: 5, status: true },
  ])
}
