const { Router } = require('express')
const route = Router()
const organizer = require('../controllers/organizer')

route.get('/organizer', organizer.index)
// route.get('/organizer/pong', organizer.test)
route.get('/organizer/:id', organizer.show)
route.put('/organizer/:id', organizer.edit)
route.delete('/organizer/:id', organizer.delete)
route.post('/organizer/register', organizer.register)
route.get('/organizer/auth', organizer.auth)
route.post('/organizer/login', organizer.login)
route.post('/organizer/logout', organizer.logout)

module.exports = route
