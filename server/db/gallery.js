const connection = require('./connection')

const getImages = (gardenId, db = connection) => {
  return db('gallery')
    .join('gardens', 'gallery.gardens_id', '=', 'gardens.id')
    .where('garden_id', gardenId)
    .select('image', 'mimetype')
}

const addImage = (newImage, db = connection) => {
  const { name, mimetype, image, garden_id } = newImage
  return db('gallery').insert({ name, mimetype, image, garden_id })
}

module.exports = {
  getImages,
  addImage,
}
