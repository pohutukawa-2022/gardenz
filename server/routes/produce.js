const jwtAuthz = require('express-jwt-authz')

const express = require('express')
const log = require('../logger')
const db = require('../db/produce')
const { checkJwt } = require('./auth')

const router = express.Router()

const checkAdmin = jwtAuthz(['create:produce'], {
  customScopeKey: 'permissions',
})

module.exports = router

router.get('/', (req, res) => {
  db.getProduce()
    .then((produce) => {
      res.json({ produce })
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

router.post('/', checkJwt, checkAdmin, (req, res) => {
  const { name, produceTypeId } = req.body
  const newProduce = { name, produceTypeId }
  db.addProduce(newProduce)
    .then((produce) => {
      res.status(201).json({ produce })
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add produce',
        },
      })
    })
})
