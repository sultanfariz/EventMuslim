const sequelize = require("sequelize");

const db = new sequelize("eventmuslim","root","",{
    dialect: "mysql"
});

db.sync({});

module.exports = db;