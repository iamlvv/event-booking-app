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
    console.log(normalSeats)
    let vipSeats = insertSeats(vipSeatNum, 'v', seatChar)
    let coupleSeats = insertSeats(coupleSeatNum, 'c', seatChar)

    const seats = normalSeats.concat(vipSeats, coupleSeats)

    const newEvent = await eventService.createEvent(req.body,seats,req.file)
    return res.status(200).json(newEvent)
  } catch (e) {
    return res.status(400).json({
      message: e.message
    })
  }
}

const getEvents = async (req, res) => {
  try {
    const { q } = req.query
    const allEvents = await eventService.getEvents()
    if (q) {
      const searchedEvents = allEvents.filter((event) => {
        return event.name.includes(q.trim())
      })
      if(!searchedEvents.length){
        return res.status(404).json({
          message:'Cannot find that event!'
        })
      }
      return res.status(200).json(searchedEvents)
    }
    return res.status(200).json(allEvents)
  } catch (e) {
    return res.status(400).json({
      message: e.message
    })
  }
}

const getEventById = async (req, res) => {
  try {
    const { id } = req.params
    const foundEvent = await eventService.getEventById(id)
    if(foundEvent.message){
      return res.status(404).json(foundEvent)
    }
    return res.status(200).json(foundEvent)
  } catch (e) {
    return res.status(400).json(e)
  }
}



module.exports = {
  createEvent,
  getEvents,
  getEventById
}