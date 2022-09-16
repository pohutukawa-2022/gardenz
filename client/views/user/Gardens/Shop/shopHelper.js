// import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export async function getProducts() {
  return await Promise.resolve(() => {
    return [
      {
        id: 1,
        productId: 2,
        name: 'large veggie box',
        description:
          'a large box filled with fresh seasonal produce grown at your local garden',
        price: 29,
        image:
          'https://cdn.shopify.com/s/files/1/0386/4602/2188/products/WebVersions4.jpg?v=1650839475&width=832',
        stock: 15,
      },
      {
        id: 2,
        productId: 2,
        name: 'small veggie box',
        description:
          'a small box filled with fresh seasonal produce grown at your local garden',
        price: 125,
        image:
          'https://cdn.shopify.com/s/files/1/0386/4602/2188/products/WebVersions4.jpg?v=1650839475&width=832',
        stock: 15,
      },
    ]
  })
}

export function getShopProducts(id, consume = requestor) {
  dispatch(setWaiting())

  return consume(`/shop/${id}`)
    .then((res) => {
      dispatch(clearWaiting())
      return res.body.gardens
    })
    .catch((err) => {
      dispatch(showError(err))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
