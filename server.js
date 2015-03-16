// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userController = require('./controllers/user');
var deviceController = require('./controllers/device');
var passport = require('passport');
var authController = require('./controllers/auth');

// Connect to the GarRest MongoDB
mongoose.connect('mongodb://localhost:27017/GarRest');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /devices
router.route('/devices')
  .post(authController.isAuthenticated, deviceController.postDevices)
  .get(authController.isAuthenticated, deviceController.getDevices);

// Create endpoint handlers for /devices/:devices_id
router.route('/devices/:device')
  .get(authController.isAuthenticated, deviceController.getDevice)
  .put(authController.isAuthenticated, deviceController.putDevice)
  .delete(authController.isAuthenticated, deviceController.deleteDevice);

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);


// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);
console.log('Garage Controller REST API Started');