const {Router} = require('express')
const route = Router()
const snap = require('../controllers/transaction')

route.get('/checkout', snap.transaction)
route.get('/ping', snap.test)

module.exports = route
