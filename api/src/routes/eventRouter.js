const express = require('express')
const router = express.Router()
const eventController = require('../controllers/eventController')
const { validateEvent, catchMulter } = require('../middleware/index')

router.get('/', eventController.getEvents) // OK
router.post('/:id/publish',eventController.publishEvent) // OK
router.post('/', catchMulter, validateEvent, eventController.createEvent) // OK
router.get('/:id', eventController.getEventById) // OK

module.exports = router