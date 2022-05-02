const multer = require('multer')
const express = require('express')
const log = require('../logger')

const router = express.Router()

const memStorage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '')
  },
})
const upload = multer({
  storage: memStorage,
})

router.get('/:name', (req, res) => {
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

module.exports = router
