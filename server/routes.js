'use strict';

let indeed = require('./indeedApi.js');
let places = require('./placesApi.js');
let path = require('path');

var controller = require('./controller');

module.exports = function(app, express) {

  app.post('/indeed', function(req, res) {
    controller.indeedApiCall(req, res);
  });

  app.get('/', function(req, res) {
    res.render('index');
  });

};
