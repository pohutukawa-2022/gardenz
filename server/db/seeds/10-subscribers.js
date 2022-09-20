exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('subscribers').del()
  await knex('subscribers').insert([
    {
      id: 1,
      garden_id: 1,
      first_name: 'Gracie',
      last_name: 'Hayward',
      email: 'gg.hhayward@gmail.com',
    },
    {
      id: 2,
      garden_id: 1,
      first_name: 'Karl',
      last_name: 'Bayly',
      email: 'karlbayly@gmail.com',
    },
    {
      id: 3,
      garden_id: 2,
      first_name: 'Bat',
      last_name: 'Man',
      email: 'batcave@knight.com',
    },
  ])
}
