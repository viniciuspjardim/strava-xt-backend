var strava = require('strava-v3');
const config = require('config');

strava.config({
  client_id:     config.get('stravaClientId'),
  client_secret: config.get('stravaClientSecret'),
  access_token:  config.get('stravaAccessToken'),
  redirect_uri:  config.get('stravaRedirectUri')
});
