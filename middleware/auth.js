const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if(!token) {
    return res.status(401).send('Access denied. No token provided');
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.athlete = decoded.athlete;
    req.stravaToken = decoded.access_token;
    next();
  }
  catch(err) {
    res.status(400).send('Invalid token');
  }
}