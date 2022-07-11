const multer = require('multer')
const express = require('express')
const log = require('../logger')
const db = require('../db/gallery')

const router = express.Router()

const memStorage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '')
  },
})
const upload = multer({
  storage: memStorage,
})

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

router.get('/:gardenid/photos', (req, res) => {
  const galleryId = req.params.gardenid
  db.getImages(galleryId)
    .then((gallery) => {
      res.send(
        `<img src= "data:image/png; base64,${gallery[0].image.toString(
          'base64'
        )}" />`
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
router.post('/:gardenId', upload.single('image'), async (req, res) => {
  const image = {
    name: req.body.name,
    mimetype: req.file.mimetype,
    image: req.file.buffer,
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
