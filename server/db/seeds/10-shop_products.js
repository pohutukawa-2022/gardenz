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
    {
      name: ' box',
      description:
        'a large box filled w at your local garden',
      price: 29,
      image: 'www.linktothisimageis.com',
    },
    {
      name: 'l',
      description:
        'a large boxsonal produce grown at your local garden',
      price: 29,
      image: 'www.linktowhereeveeis.com',
    },
    {
      name: 'large veggie box',
      description:
        'a large box filled with fresh seasonal produce grown at your local garden',
      price: 29,
      image: 'www.linktowhereeverthisimageis.com',
    },
    {
      name: 'large veggie',
      description:
        'a large box filled with fresh seasonal produce grown at your local garden',
      price: 2,
      image: 'www.linktowhereeverthisimageis.com',
    },
  ])
}
