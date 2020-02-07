# Strava XT - Backend

Strava XT is a web app that allow you to compare multiple Strava
activities. It uses the Strava V3 API to get the athlete data.

Currently this app can login into Strava using OAuth 2.0
and list the athlete activities like rides, runs, hikes and more.

The user can see the activity info like speed, moving time, distance,
etc. It also plots the GPS data on the map using
[Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
and draw the elevation data using
[Chart.js](https://www.chartjs.org/).

Multiple activities can be selected at the same time. They
are plotted in the same map and in the same charts for comparison.

> This repository is the back-end part of the app. Visit the [front-end project](https://github.com/viniciuspjardim/strava-xt-frontend) for a better overview.

## Config and running

The following environment variables must be set to run the app:

- `STRAVA_ACCESS_TOKEN` = `access_token`;
- `STRAVA_CLIENT_ID` = `client_id`;
- `STRAVA_CLIENT_SECRET` = `client_secret`;
- `STRAVA_REDIRECT_URI` - The URI of the frontend app to redirect the user after he grants access to this app in the Strava website;
- `STRAVA_JWT_PRIVATE_KEY` - A user defined private key to generate the JSON Web Token.

> You can find these variables at [Strava API Settings](https://www.strava.com/settings/api).

Clone the project, switch to the project folder and run:
```shell
npm install
```

Install nodemon globaly:
```shell
npm install -g nodemon
```

To run the project use:
```shell
npm run dev
```

For more help visit [Strava API Documentation](https://developers.strava.com) and [Strava V3 project](https://github.com/UnbounDev/node-strava-v3#readme).