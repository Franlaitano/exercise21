const { Sequelize, Model, DataTypes } = require("sequelize");
const Article = require("./models/article");

const sequelize = new Sequelize(
  "ha_ejercicio_21",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

const create = async () => {
  await sequelize.sync({ force: true });
  console.log("¡Las tablas fueron creadas!");
};
create();
console.log("¡Las tablas fueron creadas!");

module.exports = sequelize;
