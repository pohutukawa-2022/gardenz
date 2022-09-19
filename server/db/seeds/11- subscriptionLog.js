exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('subscriptionLog').del()
  await knex('subscriptionLog').insert([
    {
      id: 1,
      garden_id: 1,
      user_id: 1,
    },
    {
      id: 2,
      garden_id: 2,
      user_id: 4,
    },
    { id: 3, garden_id: 3, user_id: 1 },
  ])
}
