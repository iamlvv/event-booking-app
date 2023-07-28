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
      coupleSeatNum,
      isPublished } = newEvent

    const seatsRemain = parseInt(normalSeatNum) + parseInt(vipSeatNum) + parseInt(coupleSeatNum)

    let isPublishedBoolean = false
    if (isPublished === 'true') isPublishedBoolean = true
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
          url: file.path.replace('/upload', '/upload/w_383,h_153'),
          fileName: file.filename
        },
        isPublished: isPublishedBoolean
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
      resolve(events)
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
        return reject({
          message: 'Cannot find that event!'
        })
      }
      resolve(foundEvent)
    } catch (e) {
      reject(e)
    }
  })
}


const publishEvent = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(id, { isPublished: true }, { new: true })
      if (!updatedEvent) {
        return reject({
          message: 'Cannot find that event!'
        })
      }
      resolve(updatedEvent)
    } catch (e) {
      reject(e)
    }
  })
}

const getMostBookedEvents = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const events = await Event.find({})
      resolve(events)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  publishEvent,
  getMostBookedEvents
}