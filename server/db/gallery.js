const connection = require('./connection')

const getImages = (gardenId, db = connection) => {
  return db('gallery').where('garden_id', gardenId).select('name', 'url')
}

const addImage = (newImage, db = connection) => {
  const { name, url, garden_id } = newImage
  return db('gallery').insert({ name, url, garden_id })
}

module.exports = {
  getImages,
  addImage,
}
