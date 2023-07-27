const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController')
const { validateBooking, validateSearchBooking } = require('../middleware/index')

router.post('/api/event/:id/booking', validateBooking, bookingController.createBooking) // OK

router.post('/api/booking', validateSearchBooking, bookingController.getBooking) // OK



module.exports = router