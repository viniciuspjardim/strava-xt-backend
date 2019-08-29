const express = require('express');
const strava = require('strava-v3');

const router = express.Router();

router.get('/', (req, res) => {
  strava.athlete.get({}, (err, payload) => {
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