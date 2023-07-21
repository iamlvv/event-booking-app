const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  startDate:{
    type:Date,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    normal:{
      type:Number,
      required:true
    },
    vip:{
      type:Number,
      required:true
    },
    couple:{
      type:Number,
      required:true
    }
  },
  location:{
    type:String,
    required:true
  },
  seats:[{
    _id:false,
    seatName:String,
    isReserved:{
      type:Boolean,
      default:false
    },
    seatType:{
      type:String,
      enum:['n','v','c'],
      required:true
    },
    phoneNumber:String
  }],
  seatsRemain:Number
})


module.exports = mongoose.model('Event',EventSchema)