const express = require('express')
const log = require('../logger')

const db = require('../db/produce')

const router = express.Router()

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

router.post('/', (req, res) => {
  const { name, status } = req.body
  const newProduce = { name, status }
  db.addProduce(newProduce)
    .then((produce) => {
      res.status(201).json({ produce })
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
