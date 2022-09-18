const express = require('express')
const log = require('../logger')
const db = require('../db/gallery')

const router = express.Router()

// GET /api/v1/gallery/1
router.get('/:gardenid', (req, res) => {
  const galleryId = req.params.gardenid
  db.getImages(galleryId)
    .then((photos) => {
      res.json(photos)
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve gallery images',
        },
      })
    })
})

// POST /api/v1/gallery/1
router.post('/:gardenId', async (req, res) => {
  const image = {
    name: req.body.name,
    url: req.body.url,
    garden_id: req.params.gardenId,
  }
  try {
    await db.addImage(image)
    res.sendStatus(201)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to add gallery images',
      },
    })
  }
})

// PATCH /api/v1/gallery/:gardenId

router.patch('/:gardenId', async (req, res) => {
  const updatedImage = {
    name: req.body.name,
    url: req.body.url,
    description: req.body.description,
    id: req.body.id,
    garden_id: req.params.gardenId,
  }
  try {
    await db.updateImage(updatedImage)
    res.sendStatus(201)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to update gallery image',
      },
    })
  }
})

module.exports = router
