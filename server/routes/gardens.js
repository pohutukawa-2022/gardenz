const jwtAuthz = require('express-jwt-authz')

const express = require('express')
const log = require('../logger')
const db = require('../db/gardens')
const { userHasAdminRole, checkJwt } = require('./auth')
const { getUserById } = require('../db/users')
const { getAllSubscribers, createSubscriber } = require('../db/subscribers')

const router = express.Router()

const checkAdmin = jwtAuthz(['create:garden'], {
  customScopeKey: 'permissions',
})

module.exports = router

router.get('/:id/signup', (req, res) => {
  const id = Number(req.params.id)
  getAllSubscribers(id)
    .then((id) => {
      res.json(id)
      return res.json()
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve people',
        },
      })
    })
})

router.post('/:id/signup', async (req, res) => {
  const id = Number(req.params.id)
  const { firstName, lastName, email } = req.body
  const subscriberData = { id, firstName, lastName, email }
  try {
    await createSubscriber(subscriberData)
    res.status(201).json({ okay: 'okay' })
    return null
  } catch (error) {
    log(error.message)
    res.status(500)
  }
})

router.get('/', (req, res) => {
  db.getGardens()
    .then((gardens) => {
      res.json({ gardens })
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve gardens',
        },
      })
    })
})

router.post('/', checkJwt, checkAdmin, (req, res) => {
  const { name, address, description, lat, lon, url } = req.body
  const newGarden = { name, address, description, lat, lon, url }
  db.addGarden(newGarden)
    .then((garden) => {
      res.status(201).json({ garden })
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add garden',
        },
      })
    })
})

router.get('/:id', async (req, res) => {
  const userId = Number(req.headers.userid)
  const id = Number(req.params.id)
  try {
    const garden = await db.getGardenById(id)
    const user = await getUserById(userId)
    const isAdmin = user ? await userHasAdminRole(user.auth0Id) : false

    if (!isAdmin) {
      garden.events.forEach((event) => {
        event.totalVolunteers = event.volunteers.length
        event.isVolunteer = event.volunteers.some((v) => v.userId === userId)
        delete event.volunteers
      })
    } else {
      garden.events.forEach((event) => {
        event.totalVolunteers = event.volunteers.length
        event.isVolunteer = event.volunteers.some((v) => v.userId === userId)
      })
    }
    return res.json(garden)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to retrieve garden',
      },
    })
  }
})
