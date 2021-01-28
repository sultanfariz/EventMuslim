const sequelize = require('sequelize')

// const db = new sequelize('eventmuslim', 'root', '', {
//   dialect: 'mysql',
// })

// Uuks DB
const db = new sequelize('eventmuslim', 'nufik', 'rahasia2012', {
  dialect: 'mysql',
})

db.sync({})

module.exports = db
