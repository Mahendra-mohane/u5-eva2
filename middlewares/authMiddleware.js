const jwt = require('jsonwebtoken');
const { validateToken, generateAccessToken, generateRefreshToken } = require('../utils/jwtUtils');
const { isBlacklisted } = require('../utils/blacklist');

exports.authenticateAccessToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token is required' });
  }

  if (isBlacklisted(token)) {
    return res.status(401).json({ error: 'Access token is blacklisted' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid access token' });
    }

    req.user = user;
    next();
  });
};

exports.authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role === role) {
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  };
};
