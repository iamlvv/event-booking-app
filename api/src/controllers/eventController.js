const eventService = require('../services/eventService')

const createEvent = async (req,res)=>{
  try{
    console.log(req.body)
    await eventService.createEvent()

  } catch(e){
    return res.status(400).json({
      message:e
    })
  }
}

module.exports = {
  createEvent
}