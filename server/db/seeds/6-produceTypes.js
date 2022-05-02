exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('produce_types').del()
  await knex('produce_types').insert([
    { id: 1, name: 'veggies' },
    { id: 2, name: 'fruits' },
    { id: 3, name: 'legumes' },
    { id: 4, name: 'grains' },
    { id: 5, name: 'leafy greens' },
  ])
}
