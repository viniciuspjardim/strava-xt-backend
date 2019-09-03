# Strava Edit - Server

Edit multiple activities in Strava.

## Config

The following environment variables must be set to run the app:

- `STRAVA_CLIENT_ID` = `client_id`;
- `STRAVA_CLIENT_SECRET` = `client_secret`;
- `STRAVA_REDIRECT_URI` - The URI of the frontend app to redirect the user after he grants access to this app in the Strava website;
- `STRAVA_JWT_PRIVATE_KEY` - A private key to generate the JSON Web Token.

You can find this variables at [Strava API Settings](https://www.strava.com/settings/api).

For more help visit [Strava API Documentation](https://developers.strava.com) and [Strava V3 project](https://github.com/UnbounDev/node-strava-v3#readme).