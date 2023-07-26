const bookingService = require('../services/bookingService')
const genRandomCode = require('../utils/genRandomCode')

const getBooking = async (req, res) => {
  try {
    const foundBooking = await bookingService.getBooking(req.body)
    if (foundBooking.message) return res.status(404).json(foundBooking)
    return res.status(200).json(foundBooking)
  } catch (e) {
    return res.status(400).json({
      message: e
    })
  }
}

const createBooking = async (req, res) => {
  try {
    const { id } = req.params
    const verificationCode = genRandomCode(9)
    const newBooking = await bookingService.createBooking(req.body,verificationCode)
    if (newBooking.message) return res.status(404).json(newBooking)
    return res.status(200).json(newBooking)
  } catch (e) {
    return res.status(400).json({
      message: e
    })
  }
}

module.exports = {
  getBooking,
  createBooking
}