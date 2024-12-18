const sync = require("../sync");

const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize"); // Путь к вашему файлу подключения

sync();

const Car = sequelize.define(
  "Car",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    make: {
      // Марка автомобиля
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      // Модель автомобиля
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    year: {
      // Год выпуска
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      // Цена
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    tableName: "cars", // Имя таблицы
    timestamps: true, // Если нужны createdAt и updatedAt
  }
);

module.exports = Car;
