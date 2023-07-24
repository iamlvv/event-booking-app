// Framework and Libs
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
//

// Modules
const Event = require('./models/Event')
const Booking = require('./models/Booking')
const insertSeats = require('./utils/insertSeats')
const generateRandomCode = require('./utils/genRandomCode')
const isEmptyObject = require('./utils/isEmptyObject')
//

const app = express()

app.use(cors())
app.use(express.json())

// Connection
mongoose.connect('mongodb+srv://anhtuandao1311:HpLop8yOKqNDDYEo@netpower-booking-event.aypc1w0.mongodb.net/?retryWrites=true&w=majority')
//

app.get('/api/events', async (req, res) => {
  const allEvents = await Event.find({})
  if (isEmptyObject(req.query)) {
    return res.json(allEvents)
  }
  const {q} = req.query
  const searchedEvents = allEvents.filter((event)=>{
    return event.name.includes(q)
  })
  res.json(searchedEvents)
})

app.get('/api/events/:id', async (req, res) => {
  const { id } = req.params
  const foundEvent = await Event.findById(id)
  res.json(foundEvent)
})

app.post('/api/events/new', async (req, res) => {
  const {
    name,
    startDate,
    location,
    description,
    normalPrice,
    vipPrice,
    couplePrice,
    normalSeatNum,
    vipSeatNum,
    coupleSeatNum } = req.body

  let seatChar = { char: 'A' }

  let normalSeats = insertSeats(normalSeatNum, 'n', seatChar)
  let vipSeats = insertSeats(vipSeatNum, 'v', seatChar)
  let coupleSeats = insertSeats(coupleSeatNum, 'c', seatChar)

  const seats = normalSeats.concat(vipSeats, coupleSeats)

  const newEvent = new Event({
    name: name,
    startDate: startDate,
    description: description,
    price: {
      normal: normalPrice,
      vip: vipPrice,
      couple: couplePrice
    },
    location: location,
    seats: seats,
    seatsRemain: normalSeatNum + vipSeatNum + coupleSeatNum
  })
  await newEvent.save()
  res.json(newEvent)
})

app.get('/api/bookings', async (req, res) => {
  const allBookings = Booking.find({})
  res.json(allBookings)
})

app.post('/api/event/:id/booking', async (req, res) => {
  const { id } = req.params
  const { bookerName, email, phoneNumber, seatName, bookingPrice } = req.body
  const verificationCode = generateRandomCode(9)
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
  for (let seat in bookedEvent.seats) {
    if (seat.seatName in seatName) {
      seat.isReserved = true
      seat.phoneNumber = phoneNumber
    }
  }

  await bookedEvent.save()
  await newBooking.save()
  res.json(newBooking)
})

app.listen(5000, () => {
  console.log('Listening on port 3000')
})

// mongodb+srv://anhtuandao1311:HpLop8yOKqNDDYEo@netpower-booking-event.aypc1w0.mongodb.net/?retryWrites=true&w=majority


