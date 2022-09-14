export async function getProducts() {
  return await Promise.resolve(() => {
    return [{ id: 1,
      productId: 2,
      name: 'large veggie box',
      description: 'a large box filled with fresh seasonal produce grown at your local garden',
      price: 29,
      image: 'www.linktowhereeverthisimageis.com',
      stock: 15,
    }]
  })
}
