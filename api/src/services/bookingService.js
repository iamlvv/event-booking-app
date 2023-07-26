const Booking = require('../models/Booking')
const sendVerificationCode = require('../mail/index')

const getBooking = (reqBody) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { phoneNumber, verificationCode } = reqBody
      const foundBooking = await Booking.findOne({ phoneNumber: phoneNumber, verificationCode: verificationCode }).populate('event')
      if (!foundBooking) {
        reject({
          message: 'Cannot find your booking!'
        })
      }
      resolve(foundBooking)
    } catch (e) {
      reject(e)
    }
  })
}

const createBooking = (reqBody, verificationCode) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { bookerName, email, phoneNumber, seatName, bookingPrice } = reqBody
      const newBooking = new Booking({
        event: id,
        bookerName: bookerName,
        email: email,
        phoneNumber: phoneNumber,
        seatName: seatName,
        bookingPrice: bookingPrice,
        verificationCode: verificationCode
      })
      const bookedEvent = await Event.findById(id)
      if (!bookedEvent) {
        reject({
          message: 'Cannot find that event!'
        })
      }
      for (let seat of bookedEvent.seats) {
        if (seatName.includes(seat.seatName)) {
          seat.isReserved = true
          seat.phoneNumber = phoneNumber
        }
      }
      bookedEvent.seatsRemain -= seatName.length
      await sendVerificationCode(newBooking, bookedEvent)
      await bookedEvent.save()
      await newBooking.save()
      resolve(newBooking)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  getBooking,
  createBooking
}