const express = require('express');
const strava = require('strava-v3');

const router = express.Router();

router.get('/', (req, res) => {

  const beforeDate = new Date();
  const beforeTStamp = Math.floor(beforeDate.getTime() / 1000);

  const opts = {
    // {Integer} An epoch timestamp to use for filtering activities that
    // have taken place before a certain time
    before: req.query.before,
    // {Integer} An epoch timestamp to use for filtering activities that
    // have taken place after a certain time
    after: req.query.after,
    // {Integer} Page number
    page: 1,
    // {Integer} Number of items per page. Defaults to 30
    per_page: 10
  };

  if(req.query.page) opts.page = req.query.page;

  strava.athlete.listActivities(opts, function(err, payload, limits) {
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