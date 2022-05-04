const { checkJwt } = require('./auth')
const jwtAuthz = require('express-jwt-authz')

const express = require('express')
const log = require('../logger')
const db = require('../db/news')
const { getUsersByAuth } = require('../db/users')
const moment = require('moment')

const router = express.Router()
module.exports = router

const checkAdmin = jwtAuthz(['create:news'], {
  customScopeKey: 'permissions',
})

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

// POST /api/v1/news/:gardenid
router.post('/:gardenid', checkJwt, checkAdmin, async (req, res) => {
  try {
    const { gardenId, title, content } = req.body
    const { id: author } = await getUsersByAuth(req.user?.sub)
    const createdOn = moment().format('DD/MM/YYYY')
    const newNews = { gardenId, author, title, createdOn, content }
    await db.addNews(newNews)
    res.sendStatus(201)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to add news',
      },
    })
  }
})
