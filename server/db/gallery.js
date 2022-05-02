const connection = require('./connection')

const getImages = (gardenId, db = connection) => {
  return db('gallery')
    .where('garden_id', gardenId)
    .select('name', 'image', 'mimetype')
}

const addImage = (newImage, db = connection) => {
  const { name, mimetype, image, garden_id } = newImage
  return db('gallery').insert({ name, mimetype, image, garden_id })
}

module.exports = {
  getImages,
  addImage,
}
