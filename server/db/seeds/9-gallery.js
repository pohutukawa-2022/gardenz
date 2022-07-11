const fs = require('fs').promises
const path = require('path')
async function imageConverter(imageName) {
  const filename = path.join(__dirname, 'images', `${imageName}.jpeg`)
  try {
    return await fs.readFile(filename, 'base64')
  } catch (_) {
    // console.error(error.message, 'Error from gallery seed file')
    return
  }
}
exports.seed = async function (knex) {
  await knex('gallery').del()
  await knex('gallery').insert([
    {
      id: 1,
      name: 'image1',
      mimetype: 'jpeg',
      garden_id: 1,
      image: await imageConverter('image1'),
    },
    {
      id: 2,
      name: 'image2',
      mimetype: 'jpeg',
      garden_id: 3,
      image: await imageConverter('image2'),
    },
    {
      id: 3,
      name: 'image3',
      mimetype: 'jpeg',
      garden_id: 2,
      image: await imageConverter('image3'),
    },
  ])
}
