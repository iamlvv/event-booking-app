const eventRouter = require('./eventRouter')
const bookingRouter = require('./bookingRouter')

const routes = (app) =>{
  app.use('/api/event',eventRouter)
  app.use('/',bookingRouter)
  
}

module.exports = routes