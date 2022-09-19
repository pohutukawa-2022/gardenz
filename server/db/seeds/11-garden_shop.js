exports.seed = async function (knex) {
  await knex('garden_shop').del()
  await knex('garden_shop').insert([
    {
      id: 1,
      garden_id: 3,
      shop_products_id: 1,
      stock: 175,
    },
    {
      garden_id: 2,
      shop_products_id: 2,
      stock: 15,
    },
    {
      garden_id: 2,
      shop_products_id: 1,
      stock: 77,
    },
    {
      garden_id: 1,
      shop_products_id: 3,
      stock: 5,
    },
    {
      garden_id: 4,
      shop_products_id: 4,
      stock: 157,
    },
    {
      garden_id: 5,
      shop_products_id: 5,
      stock: 1,
    },
  ])
}
