exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('gallery').del()
  await knex('gallery').insert([
    { id: 1, name: 'image1', mimetype: 'mime', image: null, garden_id: 3 },
  ])
}
