export function getProduceTypes() {
  return Promise.resolve([
    { id: 1, name: 'Veggies' },
    { id: 2, name: 'Leafy greens' },
    { id: 3, name: 'Fruits' },
  ])
}
