var strava = require('strava-v3');
const config = require('config');

strava.config({
  access_token:  config.get('stravaAccessToken'),
  client_id:     config.get('stravaClientId'),
  client_secret: config.get('stravaClientSecret'),
  redirect_uri:  config.get('stravaRedirectUri')
});
