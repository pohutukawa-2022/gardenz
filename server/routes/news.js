const { checkJwt } = require('./auth')
// const jwtAuthz = require('express-jwt-authz')

const express = require('express')
const log = require('../logger')
const db = require('../db/news')

const router = express.Router()
module.exports = router

// !!! NOT USED
// const checkAdmin = jwtAuthz(['create:news'], {
//   customScopeKey: 'permissions',
// })

// GET /api/v1/news/:gardenid
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

// !!! Check use had permission and Auth0id matches author (or get author using token?)
// POST /api/v1/news/:gardenid
router.post('/:gardenid', checkJwt, (req, res) => {
  const { gardenId, author, title, createdOn, content } = req.body
  const newNews = { gardenId, author, title, createdOn, content }
  db.addNews(newNews)
    .then((response) => {
      res.status(201).json(response)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add news',
        },
      })
    })
})
