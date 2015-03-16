// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var DeviceSchema   = new mongoose.Schema({
  name: String,
  deviceId: String,
  location: String,
  deviceState: String,
  percentOpen: Number,
  temperature: Number,
  batteryPercent: Number,
  co2Level: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Device', DeviceSchema);