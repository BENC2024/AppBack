//Encargado de gestionar las routes

const req = require('express/lib/request')

const router = require('express').Router()


router.use('/songs', require('./api/songs'))


module.exports = router