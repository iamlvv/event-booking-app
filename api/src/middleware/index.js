const { eventSchema, bookingSchema, searchBookingSchema } = require('../validation/index');
const multer = require('multer')
const { storage } = require('../cloudinary/index')
const upload = multer({ storage })

const validateEvent = (req, res, next) => {
  const { error } = eventSchema.validate(req.body)
  if (error) {
    // const msg = error.details.map(el => el.message).join(',')
    return res.status(400).json({
      message: 'Cannot upload!'
    })
  } else {
    next()
  }
}


const validateBooking = (req, res, next) => {
  const { error } = bookingSchema.validate(req.body)
  if (error) {
    // const msg = error.details.map(el => el.message).join(',');
    return res.status(400).json({
      message: 'Cannot upload!'
    })
  } else {
    next()
  }
}


const validateSearchBooking = (req, res, next) => {
  const { error } = searchBookingSchema.validate(req.body)
  if (error) {
    // const msg = error.details.map(el => el.message).join(',');
    return res.status(400).json({
      message: 'Cannot search booking!'
    })
  } else {
    next()
  }
}

const catchMulter = (req, res, next) => {
  const tryUpload = upload.single('eventImage')
  tryUpload(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        message: 'Cannot upload!'
      })
    } else {
      next()
    }
  })
}

module.exports = {
  validateEvent,
  validateBooking,
  catchMulter,
  validateSearchBooking
}