const express = require('express');
const winston = require('winston');
const config = require('config');
const app = express();

require('./startup/loggin')();
require('./startup/cors')(app);
require('./startup/routes')(app);

// Set a env (PORT) var in Windows PowerShell: $env:PORT = 5000
const PORT = process.env.PORT || config.get('port');
app.listen(PORT, () => winston.info(`Listening on port ${PORT}...`));