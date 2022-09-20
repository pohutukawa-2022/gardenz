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

router.get('/', checkAdmin, (req, res) => {
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

//PATCH /api/v1/orders/:id

router.patch('/:id', checkAdmin, (req, res) => {
  const newOrderStatus = req.body.status
  const id = req.params.id
  db.updateOrderStatus(id, newOrderStatus)
    .then((order) => {
      res.json(order)
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

// POST /api/v1/orders

router.post('/', checkAdmin, (req, res) => {
  const order = req.body

  db.addOrder(order)

    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Cannot add order :(' })
    })
})
