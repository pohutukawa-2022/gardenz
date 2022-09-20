exports.seed = async function (knex) {
  await knex('gallery').del()
  await knex('gallery').insert([
    {
      id: 1,
      name: 'image1',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
      garden_id: 1,
    },
    {
      id: 2,
      name: 'image2',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/kelmarna-autumn-festival-2019-2-1_orig.jpg',
      garden_id: 3,
    },
    {
      id: 3,
      name: 'image3',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/published/kelmarnagardens-5.jpg?1605756669',
      garden_id: 2,
    },
    {
      id: 4,
      name: 'image1',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
      garden_id: 1,
    },
    {
      id: 5,
      name: 'image2',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/kelmarna-autumn-festival-2019-2-1_orig.jpg',
      garden_id: 1,
    },
    {
      id: 6,
      name: 'image3',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/published/kelmarnagardens-5.jpg?1605756669',
      garden_id: 1,
    },
    {
      id: 7,
      name: 'image1',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
      garden_id: 1,
    },
    {
      id: 8,
      name: 'image2',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/kelmarna-autumn-festival-2019-2-1_orig.jpg',
      garden_id: 1,
    },
    {
      id: 9,
      name: 'image3',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/published/kelmarnagardens-5.jpg?1605756669',
      garden_id: 1,
    },
    {
      id: 10,
      name: 'image1',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
      garden_id: 1,
    },
    {
      id: 11,
      name: 'image2',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/kelmarna-autumn-festival-2019-2-1_orig.jpg',
      garden_id: 1,
    },
    {
      id: 12,
      name: 'image3',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/published/kelmarnagardens-5.jpg?1605756669',
      garden_id: 1,
    },
  ])
}
