const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydatabase1", "myuser", "mypassword", {
  host: "localhost",
  dialect: "postgres", // Замените на 'mysql', 'sqlite' или 'mariadb' при необходимости
});

module.exports = sequelize;
