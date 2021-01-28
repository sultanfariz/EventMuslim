const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Transaksi = db.define(
    "transaksi",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        order_id:{type:Sequelize.STRING},
        fk_id_acara:{type:Sequelize.INTEGER},
        nama_pembeli:{type:Sequelize.STRING},
        email_pembeli:{type:Sequelize.STRING},
        nomor_hp_pembeli:{type:Sequelize.STRING},
        tanggal_pembelian:{type:Sequelize.STRING},
        total_pembelian:{type:Sequelize.BIGINT},
        infaq:{type:Sequelize.BIGINT},
        fee:{type:Sequelize.BIGINT},
        state:{type:Sequelize.BOOLEAN}
    },
    {
        freezeTableName:true
    }
);

module.exports = Transaksi;
