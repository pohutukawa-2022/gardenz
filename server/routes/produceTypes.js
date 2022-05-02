const express = require('express')
const log = require('../logger')
const db = require('../db/produce')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getProduceTypes()
    .then((produceTypes) => {
      res.json({ produceTypes })
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve produce types',
        },
      })
    })
})
