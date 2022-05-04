const express = require('express')
const log = require('../logger')
const db = require('../db/news')
const { checkJwt } = require('./auth')

const router = express.Router()
module.exports = router

router.get('/:gardenid', (req, res) => {
  db.getNewsByGardenId(Number(req.params.gardenid))
    .then((news) => {
      res.status(200).json({ news })
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve news',
        },
      })
    })
})

router.post('/', checkJwt, (req, res) => {
  // req.user is populated by the access token
  // const author = req.user.sub
  // const { gardenId, title, content } = req.body
  // TODO: get the current date here (tip: use moment package)
  // TODO: call db functin here to insert a newsItem
  res.sendStatus(201)
})
