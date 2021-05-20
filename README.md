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

> This repository is the backend part of the app. Visit the
[frontend project](https://github.com/viniciuspjardim/strava-xt-frontend)
for a better overview.

## Config and running

Clone the project, switch to the project folder and run:
```shell
npm install
```

You will need some values to configure the API. You can either create a
`default.json` inside the `config` folder or set them as environment variables.
If you use the JSON file you can see the file `default.json.example` as an example.

Values (*JSON file* / *environment variable*):

- `port` / `STXT_PORT` - the port that the API will listen for requests;
- `jwtPrivateKey` / `STXT_JWT_PRIVATE_KEY` - a user defined private key to generate
the JSON Web Token;
- `stravaClientId` / `STXT_CLIENT_ID` - the Strava `client_id`;
- `stravaClientSecret` / `STXT_CLIENT_SECRET` - the Strava `client_secret`;
- `stravaAccessToken` / `STXT_ACCESS_TOKEN` - the Strava `access_token`;
- `stravaRedirectUri` / `STXT_REDIRECT_URI` - the URI of the frontend app to redirect
the user after he grants access to this app in the Strava website.

> You can find the Strava variables at
[Strava API Settings](https://www.strava.com/settings/api). Environment variables will
override their equivalent in the JSON file.

Then run the project using:
```shell
npm run dev
```

Visit [Strava API Documentation](https://developers.strava.com) and
[Strava V3 project](https://github.com/UnbounDev/node-strava-v3#readme) for the
official documentation.
