const connection = require('./connection')

module.exports = {
  getProduce,
  addProduce,
}

function getProduce(db = connection) {
  return db('produce').select()
}

function addProduce(newProduce, db = connection) {
  return db('produce').insert(newProduce)
}
