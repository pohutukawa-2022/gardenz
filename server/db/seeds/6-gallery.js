exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { id: 1, name: 'image1', mimetype: 'mime', image: null, garden_id: 3 },
  ])
}
