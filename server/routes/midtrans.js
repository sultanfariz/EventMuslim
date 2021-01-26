const {Router} = require('express')
const route = Router()
const snap = require('../controllers/midtrans')

route.get('/checkout', snap.checkout)
route.get('/status/:id', snap.status)
route.get('/notification', snap.notification)
route.get('/ping', snap.test)

module.exports = route
