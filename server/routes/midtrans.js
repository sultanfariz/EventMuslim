const {Router} = require('express')
const route = Router()
const snap = require('../controllers/midtrans')

route.post('/checkout', snap.checkout)
route.get('/status/:id', snap.status)
// route.get('/notification', snap.notification)
route.get('/ping', snap.test)
route.get('/transaksi', snap.index)
module.exports = route
