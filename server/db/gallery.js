const connection = require('./connection')

const getImages = (gardenId, db = connection) => {
  return db('gallery').where('garden_id', gardenId).select('name', 'url')
}

const getImage = (gardenId, imageId, db = connection) => {
  return db('gallery').where({ garden_id: gardenId, id: imageId }).select()
}

const addImage = (newImage, db = connection) => {
  const { name, url, garden_id } = newImage
  return db('gallery').insert({ name, url, garden_id })
}

const updateImage = (updatedImage, db = connection) => {
  const { id, name, url, garden_id, description } = updatedImage
  return db('gallery').where({ id: id }).update({
    name,
    url,
    garden_id,
    description,
  })
}

module.exports = {
  getImages,
  addImage,
  getImage,
  updateImage,
}
