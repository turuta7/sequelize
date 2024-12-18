const Car = require("./models/cars");

(async () => {
  // Создание записи
  const newCar = await Car.create({
    make: "Toyota1",
    model: "Corolla2",
    year: 2021,
    price: 20000,
  });
  console.log(newCar.toJSON());

  // Получение всех автомобилей
  const cars = await Car.findAll();
  console.log(cars);
})();
