exports.seed = async function (knex) {
  await knex('shop_products').del()
  await knex('shop_products').insert([
    {
      id: 1,
      name: 'large veggie box',
      description:
        'a large box filled with fresh seasonal produce grown at your local garden',
      price: 29,
      image: 'www.linktowhereeverthisimageis.com',
    },
  ])
}
