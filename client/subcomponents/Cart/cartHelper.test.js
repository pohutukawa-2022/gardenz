import { gstCalulator } from "./cartHelper";

test('return the total price after gst', () => {
  const actual = gstCalulator(100)
  const gstExpected = {
    totalPrice: 100, gstAmount: 15, itemPrice: 85
  }
  expect(actual.totalPrice).toBe(gstExpected.totalPrice)
})

test('return the total price before gst', () => {
  const actual = gstCalulator(100)
  const gstExpected = {
    totalPrice: 100, gstAmount: 15, itemPrice: 85
  }
  expect(actual.itemPrice).toBe(gstExpected.itemPrice)
})

test('return the total gst ammount', () => {
  const actual = gstCalulator(100)
  const gstExpected = {
    totalPrice: 100, gstAmount: 15, itemPrice: 85
  }
  expect(actual.gstAmount).toBe(gstExpected.gstAmount)
})