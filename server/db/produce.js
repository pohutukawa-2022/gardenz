const connection = require('./connection')

module.exports = {
  getProduce,
}

function getProduce(db = connection) {
  return db('produce').select()
}
