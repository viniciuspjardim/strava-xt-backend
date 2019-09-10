const express = require('express');
const strava = require('strava-v3');

const router = express.Router();

router.get('/activity/:id', (req, res) => {

  const opts = {
    access_token: req.stravaToken,
    id: req.params.id,
    types: 'altitude',
    resolution: 'medium'
  };

  strava.streams.activity(opts, (err, payload) => {
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