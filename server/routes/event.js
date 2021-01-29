const { Router } = require('express')
const route = Router()
const event = require('../controllers/event')
const MulterStorage = require('../service/multer')
const upload = MulterStorage('event')

route.get('/event', event.index)
route.get('/event/:id', event.show)
route.post('/event/search', event.search)
route.post('/event', upload.single('foto_cover'), event.create)

module.exports = route
