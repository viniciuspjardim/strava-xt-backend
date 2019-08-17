const express = require('express');
const strava = require('strava-v3');

const router = express.Router();

const beforeDate = new Date('01/01/2018 00:00:00');
const beforeTStamp = Math.floor(beforeDate.getTime() / 1000);

console.log(`Timestamp = ${beforeTStamp}`);

const opts = {
  // {Integer} An epoch timestamp to use for filtering activities that
  // have taken place before a certain time
  before: beforeTStamp,
  // {Integer} An epoch timestamp to use for filtering activities that
  // have taken place after a certain time
  after: 0,
  // {Integer} Page number
  page:1,
  // {Integer} Number of items per page. Defaults to 30
  per_page: 5
};

router.get('/', (req, res) => {

  strava.athlete.listActivities(opts, function(err, payload, limits) {
    if(!err) {
      console.log(payload);
      res.send(payload);
    }
    else {
      console.log(err);
      res.send(err);
    }
  });
});

module.exports = router;