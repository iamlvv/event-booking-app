const express = require('express')
const router = express.Router()
const eventController = require('../controllers/eventController')


router.post('/', eventController.createEvent)


module.exports = router