const jwtAuthz = require('express-jwt-authz')

const express = require('express')
const log = require('../logger')
const db = require('../db/produce')
const { checkJwt } = require('./auth')

const router = express.Router()

const checkAdmin = jwtAuthz(['create:produce'], {
  customScopeKey: 'permissions',
})

module.exports = router
