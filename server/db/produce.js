const connection = require('./connection')

module.exports = {
  getAllProduce,
  getProduceTypes,
  addProduce,
  addGardenProduce,
  listGardenProduce,
  findProduceById,
  findGardenProduceById,
}

function getAllProduce(db = connection) {
  return db('produce').select('id', 'name', 'produce_type_id as produceTypeId')
}

function addProduce(newProduce, db = connection) {
  const { name, produceTypeId } = newProduce
  return db('produce')
    .insert({
      name,
      produce_type_id: produceTypeId,
    })
    .then(([id]) => id)
}

function findProduceById(id, db = connection) {
  return db('produce')
    .where('id', id)
    .select('name', 'produce_type_id as produceTypeId')
    .first()
}

function listGardenProduce(db = connection) {
  return db('garden_produce')
    .join('produce', 'garden_produce.produce_id', 'produce.id')
    .join('produce_types', 'produce.produce_type_id', 'produce.id')
    .select(
      'produce.id as produceId',
      'produce.name',
      'produce_types.id as produceTypeId',
      'produce_types.name as produceTypeName'
    )
}

function getProduceTypes(db = connection) {
  return db('produce_types').select()
}

function addGardenProduce(produceId, gardens, db = connection) {
  return Promise.all(
    gardens.map((gardenId) =>
      db('garden_produce').insert({
        produce_id: produceId,
        garden_id: gardenId,
        status: true,
      })
    )
  )
}

/**
 * @param {any} id
 */
function findGardenProduceById(id, db = connection) {
  return db('garden_produce')
    .where('id', id)
    .select('garden_id as gardenId', 'produce_id as produceId', 'status')
    .first()
}
// add and update garden_produce to change the status flag
// produce status moved to garden_produce
