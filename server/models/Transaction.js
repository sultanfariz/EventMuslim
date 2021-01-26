const Sequelize = require('sequelize')
const db = require('../config/db')

const Transaction = db.define(
    "transaction", {
        nama_pembeli:{type:Sequelize.STRING},
        email:{type:Sequelize.STRING},
        nomor_hp:{type:Sequelize.STRING},
        total_pembelian:{type:Sequelize.NUMBER},
        infaq:{type:Sequelize.NUMBER},
        fee:{type:Sequelize.NUMBER},
        nama_acara:{type:Sequelize.STRING},
        status:{type:Sequelize.STRING},
    },
    {
        freezeTableName: true
    }
)

module.exports = Transaction
