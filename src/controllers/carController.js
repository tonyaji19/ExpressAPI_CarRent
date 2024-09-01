// src/controllers/carController.js
const Car = require('../models/carModel');

// Create a new car
exports.createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all cars
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update car by ID
exports.updateCarById = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedCar) return res.status(404).json({ error: 'Car not found' });
    res.status(200).json(updatedCar);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete car by ID
exports.deleteCarById = async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ error: 'Car not found' });
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
