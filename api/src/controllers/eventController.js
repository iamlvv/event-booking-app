const eventService = require('../services/eventService')
const insertSeats = require('../utils/insertSeats')

const createEvent = async (req, res) => {
  try {
    const {
      normalSeatNum,
      vipSeatNum,
      coupleSeatNum } = req.body

    let seatChar = { char: 'A' }

    let normalSeats = insertSeats(normalSeatNum, 'n', seatChar)
    let vipSeats = insertSeats(vipSeatNum, 'v', seatChar)
    let coupleSeats = insertSeats(coupleSeatNum, 'c', seatChar)

    const seats = normalSeats.concat(vipSeats, coupleSeats)

    const newEvent = await eventService.createEvent(req.body, seats, req.file)
    return res.status(200).json(newEvent)
  } catch (e) {
    return res.status(400).json(e)
  }
}

const getEvents = async (req, res) => {
  try {
    const { q } = req.query
    const allEvents = await eventService.getEvents()
    if (q) {
      const searchedEvents = allEvents.filter((event) => {
        return event.name.toLowerCase().includes(q.trim().toLowerCase())
      })
      if (!searchedEvents.length) {
        return res.status(404).json({
          message: 'Cannot find that event!'
        })
      }
      return res.status(200).json(searchedEvents)
    }
    return res.status(200).json(allEvents)
  } catch (e) {
    return res.status(400).json(e)
  }
}

const getEventById = async (req, res) => {
  try {
    const { id } = req.params
    const foundEvent = await eventService.getEventById(id)
    return res.status(200).json(foundEvent)
  } catch (e) {
    return res.status(400).json(e)
  }
}

const publishEvent = async (req, res) => {
  try {
    const { id } = req.params
    const updatedEvent = await eventService.publishEvent(id)
    return res.status(200).json(updatedEvent)
  } catch (e) {
    return res.status(400).json(e)
  }
}

const getMostBookedEvents = async (req, res) => {
  try {
    const events = await eventService.getMostBookedEvents()
    const numSeats = []
    const topEvents = []
    for (let event of events) {
      numSeats.push(event.seats.length - event.seatsRemain)
    }
    numSeats.sort().reverse()
    console.log(numSeats)
    for (let i = 0; i < 5; i++) {
      for (let event of events) {
        if (event.seats.length - event.seatsRemain === numSeats[i])
          if (topEvents.length < 5) topEvents.push(event)
      }
    }
    return res.status(200).json(topEvents)
  } catch (e) {
    return res.status(400).json(e)
  }
}

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  publishEvent,
  getMostBookedEvents
}