exports.seed = async function (knex) {
  await knex('gallery').del()
  await knex('gallery').insert([
    {
      id: 1,
      name: 'image1',
      url: '',
      garden_id: 1,
    },
    {
      id: 2,
      name: 'image2',
      url: '',
      garden_id: 3,
    },
    {
      id: 3,
      name: 'image3',
      url: '',
      garden_id: 2,
    },
  ])
}
