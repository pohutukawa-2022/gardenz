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

router.post('/:gardenid', upload.single('image'), async (req, res) => {
  const image = {
    name: req.body.name,
    mimetype: req.file.mimetype,
    image: req.file.buffer,
    garden_id: req.params.gardenid,
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
