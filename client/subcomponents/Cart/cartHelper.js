
export function gstCalulator(cost) {
  const gst = 0.15 * cost
  const itemPrice = 0.85 * cost
  return ( { totalPrice: cost, gstAmount: gst, itemPrice } )
}

// console.log(gstCalulator(100))

