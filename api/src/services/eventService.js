const Event = require('../models/Event')

const createEvent = (newEvent, seats, file) => {
  return new Promise(async (resolve, reject) => {
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
      coupleSeatNum } = newEvent

    const seatsRemain = parseInt(normalSeatNum) + parseInt(vipSeatNum) + parseInt(coupleSeatNum)
    try {
      const createdEvent = await Event.create({
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
        seatsRemain: seatsRemain,
        image: {
          url: file.path,
          fileName: file.filename
        }
      })
      if (createdEvent) {
        resolve(createdEvent)
      }
    } catch (e) {
      reject(e)
    }
  })
}

const getEvents = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const events = await Event.find({})
      if (events) {
        resolve(events)
      }
    } catch (e) {
      reject(e)
    }
  })
}


const getEventById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const foundEvent = await Event.findById(id)
      if (!foundEvent) {
        reject({
          message:'Cannot find that event!'
        })
      }
      resolve(foundEvent)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  createEvent,
  getEvents,
  getEventById
}