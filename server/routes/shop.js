const express = require('express')
const db = require('../db/shop')

const router = express.Router()

module.exports = router

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await db.productsForGarden(id)
    res.send(data)
    
  } catch(error) {
    res.status(500).send({error : error.message})
  }
})
