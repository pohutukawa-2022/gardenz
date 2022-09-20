const connection = require('./connection')

const getImages = (gardenId, db = connection) => {
  return db('gallery')
    .where('garden_id', gardenId)
    .select('name', 'url', 'id', 'garden_id')
}

const addImage = (newImage, db = connection) => {
  const { name, url, garden_id } = newImage
  return db('gallery').insert({ name, url, garden_id })
}

const deleteImage = (id, db = connection) => {
  return db('gallery').where('id', id).delete()
}

module.exports = {
  getImages,
  addImage,
  deleteImage,
}
