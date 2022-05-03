exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('produce').del()
  await knex('produce').insert([
    { id: 1, name: 'Strawberry', produce_type_id: 2 },
    { id: 2, name: 'Celery', produce_type_id: 5 },
    { id: 3, name: 'Brocolli', produce_type_id: 1 },
    { id: 4, name: 'Lemon', produce_type_id: 2 },
    { id: 5, name: 'Kiwifruit', produce_type_id: 2 },
    { id: 6, name: 'Tomato', produce_type_id: 1 },
    { id: 7, name: 'Cucumber', produce_type_id: 1 },
    { id: 8, name: 'Watermelon', produce_type_id: 2 },
    { id: 9, name: 'Green peas', produce_type_id: 3 },
    { id: 10, name: 'Oats', produce_type_id: 4 },
    { id: 11, name: 'Black beans', produce_type_id: 3 },
    { id: 12, name: 'Parsley', produce_type_id: 5 },
  ])
}
