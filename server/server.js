const path = require('path')
const express = require('express')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const gardenRoutes = require('./routes/gardens')
const eventRoutes = require('./routes/events')
const volunteerRoutes = require('./routes/volunteers')
const users = require('./routes/users')
const produce = require('./routes/produce')
const gardenProduce = require('./routes/gardenProduce')
const produceTypes = require('./routes/produceTypes')
const news = require('./routes/news')
const gallery = require('./routes/gallery')
const shop = require('./routes/shop')

const server = express()

module.exports = server

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/shop', shop)
server.use('/api/v1/gardens', gardenRoutes)
server.use('/api/v1/events', eventRoutes)
server.use('/api/v1/volunteers', volunteerRoutes)
server.use('/api/v1/users', users)
server.use('/api/v1/produce', produce)
server.use('/api/v1/gardenproduce', gardenProduce)
server.use('/api/v1/producetypes', produceTypes)
server.use('/api/v1/news', news)
server.use('/api/v1/gallery', gallery)

server.get('*', (req, res) => {
  const appPath = path.join(__dirname, 'public', 'index.html')
  res.sendFile(appPath)
})
