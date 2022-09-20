const connection = require('./connection')

module.exports = {
  getAllSubscribers,
  createSubscriber,
}

function getAllSubscribers(id, db = connection) {
  return db('subscribers').select()
}

function createSubscriber(subscriberData, db = connection) {
  const { id, firstName, lastName, email } = subscriberData

  return db('subscribers').insert({
    garden_id: id,
    first_name: firstName,
    last_name: lastName,
    email,
  })
}
