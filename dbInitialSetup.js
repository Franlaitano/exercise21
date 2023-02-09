const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("ha_ejercicio_21", "root", "root1234", {
    host: "127.0.0.1",
    dialect: "mysql",
});