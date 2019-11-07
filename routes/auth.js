const express = require('express');
const strava = require('strava-v3');
const config = require('config');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/stravalogin', (req, res) => {
  const url = strava.oauth.getRequestAccessURL({scope:"activity:read_all,activity:write"});
  res.send({ url: url });
});

router.get('/', (req, res) => {

  if(!req.query.code) {
    return res.status(401).send('Strava authentication failed');
  }

  strava.oauth.getToken(req.query.code, (err, payload) => {
    if(!err && payload.body.access_token) {
      const jwtToken = jwt.sign(
        { ...payload.body },
        config.get('jwtPrivateKey')
      );

      res.header('x-auth-token', jwtToken).send('Connected to Strava');
    }
    else {
      return res.status(401).send('Strava authentication failed');
    }
  });
});

module.exports = router;