const version1Router = require('express').Router();
const version2Router = require('express').Router();

const version1Controller = require('../apis/v1/controller');
const middlewares = require('../middlewares/processPayment');
const version2Controller = require('../apis/v2/controllers');

// api version 1 routes will be defined from below
version1Router.post('/processPaymentApi', middlewares.processPaymentValidation, version1Controller.ProcessPayment);

// api verision 2 routes will be defined from below
version2Router.post('/processPaymentApi', version2Controller.ProcessPayment);

module.exports = { version1Router, version2Router };
