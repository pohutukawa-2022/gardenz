const connection = require('./connection')

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserDetailsByGarden,
  getUsersByAuth,
  getUserById
}

function getUserDetailsByGarden (gardenId, db = connection) {
  return db('users')
    .select('id', 'username', 'garden_id as gardenId', 'email')
    .where('garden_id', gardenId)
}

function getUserByName (username, db = connection) {
  return db('users')
    .select('username', 'garden_id as gardenId', 'id', 'auth0_id as auth0Id', 'email', 'first_name as firstName', 'last_name as lastName')
    .where('username', username)
    .first()
}

function getUserById (id, db = connection) {
  return db('users')
    .select('username', 'garden_id as gardenId', 'id', 'auth0_id as auth0Id', 'email')
    .where('id', id)
    .first()
}

function getUsersByAuth (auth0Id, db = connection) {
  return db('users')
    .select(
      'id',
      'email',
      'username',
      'first_name as firstName',
      'last_name as lastName',
      'garden_id as gardenId',
      'auth0_id as auth0Id'
    )
    .where('auth0Id', auth0Id)
    .first()
}

function createUser (user, db = connection) {
  return userExists(user.auth0Id, db)
    .then((exists) => {
      if (exists) {
        throw new Error('User exists')
      }
      return false
    })
    .then(() => {
      return db('users').insert({
        first_name: user.firstName,
        last_name: user.lastName,
        username: user.username,
        garden_id: user.gardenId,
        email: user.email,
        auth0_id: user.auth0Id
      })
    })
}

function userExists (uid, db = connection) {
  return db('users')
    .count('id as n')
    .where('auth0_id', uid)
    .then((count) => {
      return count[0].n > 0
    })
}
