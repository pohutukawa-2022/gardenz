const fs = require('fs').promises
const path = require('path')

exports.seed = async function (knex) {
  const filename = path.join(__dirname, 'images', '1.png')
  // const image1 = await fs.readFile(filename, 'binary')
  const image = await fs.readFile(filename, 'binary')
  // console.log(image)
  const buffer = Buffer.from(image)

  await knex('gallery').del()
  await knex('gallery').insert([
    {
      id: 1,
      name: 'image 1',
      mimetype: 'png',
      garden_id: 1,
      image: buffer,
    },
    // { id: 2, name: 'image 2', mimetype: 'jpeg', garden_id: 3 },
    // { id: 3, name: 'image 3', mimetype: 'jpeg', garden_id: 2 },
  ])
}
