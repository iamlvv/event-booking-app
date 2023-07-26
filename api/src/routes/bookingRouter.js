const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController')

router.post('/api/booking',bookingController.getBooking)

router.post('/api/event/:id/booking',bookingController.createBooking)

module.exports = router