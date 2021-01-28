const Sequelize = require('sequelize');
const db = require('../config/db.js');
const Transaksi = require('./Transaksi');

const Acara = db.define(
    "acara",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        fk_id_organizer:{type:Sequelize.INTEGER},
        nama_organizer:{type:Sequelize.STRING},
        nama_acara:{type:Sequelize.STRING},
        lokasi:{type:Sequelize.STRING},
        harga:{type:Sequelize.BIGINT},
        tanggal:{type:Sequelize.STRING},
        tag_acara:{type:Sequelize.STRING},
        deskripsi:{type:Sequelize.STRING(1024)},
        // foto_cover:{type:Sequelize.STRING, allowNull: true},
        no_rek_organizer:{type:Sequelize.STRING},
        bank_rek_organizer:{type:Sequelize.STRING},
        status_acara:{type:Sequelize.BOOLEAN},
        verifikasi_acara:{type:Sequelize.BOOLEAN},
        state:{type:Sequelize.BOOLEAN}
    },
    {
        freezeTableName:true
    }
);

// Acara.hasMany(Transaksi, {foreignKey: 'fk_id_acara'});

module.exports = Acara;
