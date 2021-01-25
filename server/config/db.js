const sequelize = require("sequelize");

const db = new sequelize("eventmuslim","root","h1k1g4y4",{
    dialect: "mysql"
});

db.sync({});

module.exports = db;