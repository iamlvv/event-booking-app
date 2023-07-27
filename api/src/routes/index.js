const eventRouter = require('./eventRouter')
const bookingRouter = require('./bookingRouter')

const routes = (app) =>{
  app.use('/',bookingRouter)
  app.use('/api/event',eventRouter)
  
}

module.exports = routes