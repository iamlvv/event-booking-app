const express = require('express')
const router = express.Router()
const eventController = require('../controllers/eventController')
const multer = require('multer')
const { storage } = require('../cloudinary/index')
const upload = multer({ storage })

router.get('/', eventController.getEvents)
router.post('/',upload.single('eventImage'), eventController.createEvent)
router.get('/:id',eventController.getEventById)

module.exports = router