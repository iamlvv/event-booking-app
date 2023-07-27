const express = require('express')
const router = express.Router()
const eventController = require('../controllers/eventController')
const multer = require('multer')
const { storage } = require('../cloudinary/index')
const upload = multer({ storage })
const { validateEvent, catchMulter } = require('../middleware/index')

router.get('/', eventController.getEvents) // OK
router.post('/:id/publish',eventController.publishEvent)
router.post('/', catchMulter, validateEvent, eventController.createEvent) // OK
router.get('/:id', eventController.getEventById) // OK

module.exports = router