const Booking = require('../models/Booking')
const Event = require('../models/Event')
const { sendVerificationCode } = require('../mail/index')

const getBooking = (reqBody) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { phoneNumber, verificationCode } = reqBody
      if (verificationCode) {
        const foundBooking = await Booking.find({ phoneNumber: phoneNumber, verificationCode: verificationCode }).populate('event')
        if (!foundBooking) {
          return reject({
            message: 'Cannot find your booking!'
          })
        }
        resolve(foundBooking)
      } else {
        const foundBookings = await Booking.find({ phoneNumber: phoneNumber}).populate('event')
        if (!foundBookings) {
          return reject({
            message: 'You do not have any booking!'
          })
        }
        resolve(foundBookings)
      }
    } catch (e) {
      reject(e)
    }
  })
}

const createBooking = (reqBody, verificationCode, id) => {
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
        return reject({
          message: 'Cannot find that event!'
        })
      }

      let validReservedSeat = 0


      for (let seat of bookedEvent.seats) {
        if (seatName.includes(seat.seatName) && seat.isReserved === false) {
          validReservedSeat += 1
          seat.isReserved = true
          seat.phoneNumber = phoneNumber
        } else if (seatName.includes(seat.seatName) && seat.isReserved === true) {
          return reject({
            message: 'Cannot choose this seat!'
          })
        }
      }
      bookedEvent.seatsRemain -= validReservedSeat
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