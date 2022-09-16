exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    {
      id: 1,
      created_at: '2013-11-28 23:09:11.761166+03',
      status: 'Completed',
    },
    {
      id: 2,
      created_at: '2014-12-01 23:09:11.761166+03',
      status: 'Completed',
    },
    {
      id: 3,
      created_at: '2019-10-10 23:09:11.761166+03',
      status: 'Pending',
    },
  ])
}
