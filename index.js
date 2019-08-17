const express = require('express');
const strava = require('strava-v3');
const home = require('./routes/home')
const activities = require('./routes/activities');

const app = express();

// CORS: Allowing access from http://localhost:8080
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use('/', home);
app.use('/api/activities', activities);

// How to set a env (PORT) var in Windows PowerShell: $env:PORT = 5000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});