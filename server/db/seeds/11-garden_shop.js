exports.seed = async function (knex) {
  await knex('garden_shop').del()
  await knex('garden_shop').insert([
    {
      id: 1,
      garden_id: 3, //foreign key
      shop_products_id: 1, //foreign key
      stock: 175,
    },
    {
      garden_id: 2, //foreign key
      shop_products_id: 2, //foreign key
      stock: 15,
    },
    {
      garden_id: 1, //foreign key
      shop_products_id: 3, //foreign key
      stock: 5,
    },
    {
      garden_id: 4, //foreign key
      shop_products_id: 4, //foreign key
      stock: 157,
    },
    {

      garden_id: 5, //foreign key
      shop_products_id: 5, //foreign key
      stock: 1,
    },
  ])
}
