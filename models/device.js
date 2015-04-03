// Load required packages
var mongoose = require('mongoose');

// Define our device schema
var DeviceSchema   = new mongoose.Schema({
  nm: String,
  id: String,
  lo: String,
  st: String,
  pt: Number,
  tc: Number,
  bl: Number,
  co: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Device', DeviceSchema);