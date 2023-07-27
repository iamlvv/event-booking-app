const Joi = require('joi')

const eventSchema = Joi.object({
  name: Joi.string().required().max(50),
  startDate: Joi.date().required,
  location: Joi.string().required().max(100),
  normalPrice: Joi.number().required().min(0),
  vipPrice: Joi.number().required().min(0),
  couplePrice: Joi.number().required().min(0),
  normalSeatNum: Joi.number().required().min(0),
  vipSeatNum: Joi.number().required().min(0),
  coupleSeatNum: Joi.number().required().min(0)
})

const bookingSchema = Joi.object({
  bookerName: Joi.string().required().max(30), 
  email: Joi.string().required().email(), 
  phoneNumber: Joi.string().required(), 
  seatName: Joi.array().items(Joi.string()), 
  bookingPrice: Joi.number().min(0)
})

module.exports = {
  eventSchema,
  bookingSchema
}