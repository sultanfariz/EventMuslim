const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Organizer = db.define(
    "organizer",{
        email:{type:Sequelize.STRING},
        nama_organizer:{type:Sequelize.STRING},
        nomor_hp:{type:Sequelize.STRING},
        password:{type:Sequelize.STRING},
        instagram:{type:Sequelize.STRING},
        facebook:{type:Sequelize.STRING},
        whatsapp:{type:Sequelize.STRING},
        state:{type:Sequelize.BOOLEAN},
    },
    {
        freezeTableName:true
    }
);

module.exports = Organizer;