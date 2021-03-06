const express = require('express');
const strava = require('strava-v3');

const router = express.Router();

router.get('/', (req, res) => {

  const opts = {
    access_token: req.stravaToken,
    page: 1,
    per_page: 30
  };

  if(req.query.page) opts.page = req.query.page;
  if(req.query.before) opts.before = req.query.before;
  if(req.query.after) opts.after = req.query.after;

  // Test error here
  strava.athlete.listActivities(opts, (err, payload) => {
    if(!err) {
      res.send(payload);
    }
    else {
      console.log(err);
      res.send(err);
    }
  });
});

router.get('/:id', (req, res) => {

  const opts = {
    access_token: req.stravaToken,
    id: req.params.id
  };

  strava.activities.get(opts, (err, payload) => {
    if(!err) {
      res.send(payload);
    }
    else {
      console.log(err);
      res.send(err);
    }
  });
});

module.exports = router;