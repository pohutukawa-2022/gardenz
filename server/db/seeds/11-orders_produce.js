exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders_produce').del()
  await knex('orders_produce').insert([
    {
      produce_id: 3,
      order_id: 2,
      quantity: 5,
    },
    {
      produce_id: 10,
      order_id: 3,
      quantity: 3,
    },
    {
      produce_id: 6,
      order_id: 1,
      quantity: 4,
    },
  ])
}
