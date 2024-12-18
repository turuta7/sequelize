const sequelize = require("./sequelize"); // Путь к вашему подключению
const Car = require("./models/cars"); // Подключение модели

const sync = async () => {
  try {
    await sequelize.authenticate(); // Проверяем соединение
    console.log("Connection established successfully.");

    // await sequelize.sync({ force: true }); // Создаем таблицу
    await sequelize.sync({ alter: true });

    console.log("Database synchronized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close(); // Закрываем соединение
  }
};

module.exports = sync;
