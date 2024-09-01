// src/models/carModel.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  transmission: {
    type: String,
    required: true
  },
  dailyRate: {
    type: Number,
    required: true
  },
  monthlyRate: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  additionalInfo: {
    type: [{
      belumTermasuk: String,
      biayaChargeZonasi: String,
      lainnya: String
    }],
    required: true
  }
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
