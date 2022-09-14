exports.seed = async function (knex) {
  await knex('garden_shop').del()
  await knex('garden_shop').insert([
    {
      id: 1,
      garden_id: 3, //foreign key
      shop_products_id: 1, //foreign key
      stock: 15,
    },
  ])
}
