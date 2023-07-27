const bookingService = require('../services/bookingService')
const genRandomCode = require('../utils/genRandomCode')

const getBooking = async (req, res) => {
  try {
    const foundBooking = await bookingService.getBooking(req.body)
    return res.status(200).json(foundBooking)
  } catch (e) {
    return res.status(400).json(e)
  }
}

const createBooking = async (req, res) => {
  try {
    const { id } = req.params
    const verificationCode = genRandomCode(9)
    const newBooking = await bookingService.createBooking(req.body,verificationCode,id)
    return res.status(200).json(newBooking)
  } catch (e) {
    return res.status(400).json(e)
  }
}

module.exports = {
  getBooking,
  createBooking
}