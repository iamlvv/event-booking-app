const Joi = require('joi')

const eventSchema = Joi.object({
  name: Joi.string().trim().required().max(50),
  startDate: Joi.date().required(),
  location: Joi.string().trim().required().max(100),
  description: Joi.string().trim().required().max(200),
  normalPrice: Joi.number().required().min(0),
  vipPrice: Joi.number().required().min(0),
  couplePrice: Joi.number().required().min(0),
  normalSeatNum: Joi.number().required().min(0),
  vipSeatNum: Joi.number().required().min(0),
  coupleSeatNum: Joi.number().required().min(0),
  isPublished: Joi.string().trim().valid('true','false').required()
})

const bookingSchema = Joi.object({
  bookerName: Joi.string().trim().required().max(30),
  email: Joi.string().trim().required().email(),
  phoneNumber: Joi.string().trim().required(),
  seatName: Joi.array().items(Joi.string().trim()).required(),
  bookingPrice: Joi.number().min(0).required()
})

const searchBookingSchema = Joi.object({
  phoneNumber: Joi.string().trim().required().max(10),
  verificationCode:Joi.string().trim().allow('').max(9)
})

module.exports = {
  eventSchema,
  bookingSchema,
  searchBookingSchema
}