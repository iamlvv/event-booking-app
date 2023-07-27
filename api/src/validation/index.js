const Joi = require('joi')

const eventSchema = Joi.object({
  name: Joi.string().required().max(50),
  startDate: Joi.date().required(),
  location: Joi.string().required().max(100),
  description: Joi.string().required().max(200),
  normalPrice: Joi.number().required().min(0),
  vipPrice: Joi.number().required().min(0),
  couplePrice: Joi.number().required().min(0),
  normalSeatNum: Joi.number().required().min(0),
  vipSeatNum: Joi.number().required().min(0),
  coupleSeatNum: Joi.number().required().min(0),
  isPublished: Joi.string().valid('true','false').required()
})

const bookingSchema = Joi.object({
  bookerName: Joi.string().required().max(30),
  email: Joi.string().required().email(),
  phoneNumber: Joi.string().required(),
  seatName: Joi.array().items(Joi.string()).required(),
  bookingPrice: Joi.number().min(0).required()
})

const searchBookingSchema = Joi.object({
  phoneNumber: Joi.string().required().max(10),
  verificationCode:Joi.string().required().max(9)
})

module.exports = {
  eventSchema,
  bookingSchema,
  searchBookingSchema
}