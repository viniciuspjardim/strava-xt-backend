const express = require('express');
const strava = require('strava-v3');

const router = express.Router();

router.get('/', (req, res) => {

  const opts = { access_token: req.stravaToken };

  strava.athlete.get(opts, (err, payload) => {
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