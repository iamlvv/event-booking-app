const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Event'
  },
  bookerName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  seatName: {
    type: [String],
    required: true
  },
  bookingPrice: {
    type: Number,
    required: true
  },
  verificationCode: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Booking', BookingSchema)