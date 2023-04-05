const Car = require("./car");

function CreateCar(req, res) {
  const car = Car.create(req.body);

  res.status(201).json(car);
}

function ListCars(req, res) {
  const cars = Car.list();

  res.status(200).json(cars);
}

function GetCarById(req, res) {
  const car = req.car;

  res.status(200).json(car);
}

function UpdateCar(req, res) {
  const car = req.car;

  car.update(req.body);

  res.status(200).json(car);
}

function DeleteCar(req, res) {
  const car = req.car;

  car.delete();

  res.status(204).end();
}

module.exports = {
  CreateCar,
  ListCars,
  GetCarById,
  UpdateCar,
  DeleteCar,
};
