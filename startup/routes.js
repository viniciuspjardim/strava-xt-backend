const express = require('express');
const error = require('../middleware/error');
const home = require('../routes/home');
const auth = require('../routes/auth');
const athlete = require('../routes/athlete');
const activities = require('../routes/activities');

module.exports = function(app) {
  app.use(express.json());
  app.use('/', home);
  app.use('/api/auth', auth);
  app.use('/api/athlete', athlete);
  app.use('/api/activities', activities);
  app.use(error);
};