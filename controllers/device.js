// Load required packages
var Device = require('../models/device');

// Create endpoint /api/devices for POSTS
exports.postDevices = function(req, res) {
  // Create a new instance of the Device model
  var device = new Device();

  // Set the device properties that came from the POST data
  device.name = req.body.name;
  device.deviceId = req.body.deviceId;
  device.location = req.body.location;
  device.deviceState = req.body.deviceState;
  device.percentOpen = req.body.percentOpen;
  device.temperature = req.body.temperature;
  device.batteryPercent = req.body.batteryPercent;
  device.co2Level = req.body.co2Level;

  // Save the device and check for errors
  device.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Device added to the list!', data: device });
  });
};

// Create endpoint /api/devices for GET
exports.getDevices = function(req, res) {
  // Use the Device model to find all devices
  Device.find(function(err, devices) {
    if (err)
      res.send(err);

    res.json(devices);
  });
};

// Create endpoint /api/devices/:device_id for GET
exports.getDevice = function(req, res) {
  // Use the Device model to find a specific device
  Device.findById(req.params.device_id, function(err, device) {
    if (err)
      res.send(err);

    res.json(device);
  });
};

// Create endpoint /api/devices/:device_id for PUT
exports.putDevice = function(req, res) {
  // Use the Device model to find a specific device
  Device.findById(req.params.device_id, function(err, device) {
    if (err)
      res.send(err);

      // Update the existing device parameters
      device.name = req.body.name;
      device.deviceId = req.body.deviceId;
      device.location = req.body.location;
      device.deviceState = req.body.deviceState;
      device.percentOpen = req.body.percentOpen;
      device.temperature = req.body.temperature;
      device.batteryPercent = req.body.batteryPercent;
      device.co2Level = req.body.co2Level;

    // Save the device and check for errors
    device.save(function(err) {
      if (err)
        res.send(err);

      res.json(device);
    });
  });
};

// Create endpoint /api/devices/:device_id for DELETE
exports.deleteDevice = function(req, res) {
  // Use the Device model to find a specific device and remove it
  Device.findByIdAndRemove(req.params.device_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Device removed from the list!' });
  });
};