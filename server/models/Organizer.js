const Sequelize = require('sequelize');
const db = require('../config/db.js');
const Acara = require('./Acara.js');

const Organizer = db.define(
    "organizer",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        email:{
            type:Sequelize.STRING,
            isEmail:true
        },
        nama_organizer:{type:Sequelize.STRING},
        nomor_hp:{type:Sequelize.STRING},
        password:{type:Sequelize.STRING},
        instagram:{type:Sequelize.STRING},
        facebook:{type:Sequelize.STRING},
        whatsapp:{type:Sequelize.STRING},
        state:{type:Sequelize.BOOLEAN}
    },
    {
        freezeTableName:true
    }
);

// Organizer.hasMany(Acara, {foreignKey: 'fk_id_organizer'});

module.exports = Organizer;