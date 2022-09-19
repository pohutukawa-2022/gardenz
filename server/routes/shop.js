const express = require('express')
const db = require('../db/shop')
const log = require('../logger')
const router = express.Router()

module.exports = router

router.get('/:id', async (req, res) => {
  try {
    const gardenId = req.params.id
    const data = await db.getProductsByGarden(gardenId)
    res.send(data)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to retrieve products',
      },
    })
  }
})
