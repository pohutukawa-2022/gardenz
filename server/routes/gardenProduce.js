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

router.post('/', checkJwt, checkAdmin, (req, res) => {
  const { produceId, gardens } = req.body
  const newGardenProduce = { produceId, gardens }
  db.addGardenProduce(newGardenProduce)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add garden produce',
        },
      })
    })
})
