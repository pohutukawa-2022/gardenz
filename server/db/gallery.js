const connection = require('./connection')

module.exports = {
  getImages,
}

const getImages = (gardenId, db = connection) => {
  return db('gallery')
    .join('gardens', 'gallery.gardens_id', '=', 'gardens.id')
    .where('garden_id', gardenId)
    .select('image', 'mimetype')
}
