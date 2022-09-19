const connection = require('./connection')

module.exports = {
  getAllSubscribers,
  createSubscriber,
}

// delete getALlSubscribers
function getAllSubscribers(id, db = connection) {
  return db('subscribers').select()
}

function createSubscriber(subscriberData, db = connection) {
  const { id, firstName, lastName, email } = subscriberData
  return db('subscribers').insert({
    id,
    first_name: firstName,
    last_name: lastName,
    email,
  })
}
