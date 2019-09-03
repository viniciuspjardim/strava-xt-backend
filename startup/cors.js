const cors = require('cors');

module.exports = function(app) {
  app.use(cors({ exposedHeaders: 'x-auth-token' }));
};