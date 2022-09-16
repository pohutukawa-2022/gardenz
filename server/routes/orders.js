const jwtAuthz = require('express-jwt-authz')

const express = require('express')
const log = require('../logger')
const db = require('../db/orders')

// const { checkJwt } = require('./auth')

const router = express.Router()

const checkAdmin = jwtAuthz(['create:orders'], {
  customScopeKey: 'permissions',
})

module.exports = router

// GET /api/v1/orders

router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.json(orders)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve produce',
        },
      })
    })
})
