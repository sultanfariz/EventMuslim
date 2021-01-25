const Sequelize = require('sequelize');
const db = require('../config/db.js');
const Organizer = require('./Organizer');
const Acara = require('./Acara');

const Transaksi = db.define(
    "transaksi",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        fk_id_acara:{type:Sequelize.INTEGER},
        nama_pembeli:{type:Sequelize.STRING},
        email_pembeli:{type:Sequelize.STRING},
        nomor_hp_pembeli:{type:Sequelize.STRING},
        tanggal_pembelian:{type:Sequelize.DATE},
        total_pembelian:{type:Sequelize.BIGINT},
        infaq:{type:Sequelize.BIGINT},
        fee:{type:Sequelize.BIGINT},
        verifikasi_midtrans:{type:Sequelize.BOOLEAN},
        state:{type:Sequelize.BOOLEAN}
    },
    {
        freezeTableName:true
    }
);

// Acara.hasMany(Transaksi, {foreignKey: 'fk_id_acara'});
// Transaksi.belongsTo(Acara, {foreignKey: 'fk_id_acara'});

module.exports = Acara;