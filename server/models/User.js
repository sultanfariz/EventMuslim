const Sequelize = require('sequelize');
const db = require('../config/db.js');

const User = db.define(
    "user",{
        username:{type:Sequelize.STRING},
        email:{type:Sequelize.STRING},
        namalengkap:{type:Sequelize.STRING},
        password:{type:Sequelize.STRING}
    },
    {
        freezeTableName:true
    }
);

module.exports = User;
