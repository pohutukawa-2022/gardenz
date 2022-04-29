const connection = require('./connection')

module.exports = {
  getAllProduce,
  getProduceTypes,
  addProduce,
  addGardenProduce,
  listGardenProduce,
}

function getAllProduce(db = connection) {
  return db('produce').select()
}

function addProduce(newProduce, db = connection) {
  const { name, produceTypeId } = newProduce
  return db('produce').insert({
    name,
    produce_type_id: produceTypeId,
  })
}

function listGardenProduce(db = connection) {
  return db('garden_produce')
    .join('produce', 'garden_produce.produce_id', 'produce.id')
    .join('produce_types', 'produce.produce_type_id', 'produce.id')
    .select(
      'produce.id as produceId',
      'produce.name',
      'produce.status',
      'produce_types.id as produceTypeId',
      'produce_types.name as produceTypeName'
    )
}

function getProduceTypes(db = connection) {
  return db('produce_types').select()
}

function addGardenProduce(produceId, gardenId, db = connection) {
  return db('garden_produce').insert({
    produce_id: produceId,
    garden_id: gardenId,
  })
}

function updateGardenProduce(status, db = connection)

// add and update garden_produce to change the status flag
// produce status moved to garden_produce
