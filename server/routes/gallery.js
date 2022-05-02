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

router.get('/gardens/:id', (req, res) => {
  const photoName = req.params.name
  db.getPhotoByName(photoName)
    .then((photos) => {
      res.json(
        photos.map((photo) => ({
          id: photo.id,
          name: photo.name,
          mimetype: photo.mimetype,
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

router.post('/gardens/:id', upload.single('image'), async (req, res) => {
  const image = {
    name: req.body.name,
    mimetype: req.file.mimetype,
    image: req.file.buffer,
    garden_id: req.params.id,
  }
  try {
    await db.addPhoto(image)
    res.sendStatus(201)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to retrieve gallery images',
      },
    })
  }
})

module.exports = router
