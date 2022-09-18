exports.seed = async function (knex) {
  await knex('gallery').del()
  await knex('gallery').insert([
    {
      id: 1,
      name: 'image1',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
      garden_id: 1,
      description: 'This is beautiful',
    },
    {
      id: 2,
      name: 'image2',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/kelmarna-autumn-festival-2019-2-1_orig.jpg',
      garden_id: 3,
      description: 'The most amazing picture',
    },
    {
      id: 3,
      name: 'image3',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/published/kelmarnagardens-5.jpg?1605756669',
      garden_id: 2,
      description: 'This is the best garden image in the world',
    },
  ])
}
