// src/routes/carRoutes.js
const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.post('/', carController.createCar);
router.get('/', carController.getCars);
router.get('/:id', carController.getCarById);
router.put('/:id', carController.updateCarById);
router.delete('/:id', carController.deleteCarById);

module.exports = router;
