const express = require('express')
const log = require('../logger')
const db = require('../db/gallery')

const router = express.Router()

// GET /api/v1/gallery/1
router.get('/:gardenid', (req, res) => {
  const galleryId = req.params.gardenid
  db.getImages(galleryId)
    .then((photos) => {
      res.json(
        photos.map((photo) => ({
          ...photo,
          image: photo.image.toString('base64'),
        }))
      )
      return null
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

module.exports = router
