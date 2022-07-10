exports.seed = async function (knex) {
  await knex('gallery').del()
  await knex('gallery').insert([
    { id: 1, name: 'image 1', mimetype: 'jpg', garden_id: 1 },
    { id: 2, name: 'image 2', mimetype: 'jpg', garden_id: 3 },
    { id: 3, name: 'image 3', mimetype: 'png', garden_id: 2 },
  ])
}
