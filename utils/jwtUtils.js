const jwt = require('jsonwebtoken');

exports.generateAccessToken = (user) => {
  return jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

exports.generateRefreshToken = (user) => {
  return jwt.sign({ username: user.username, role: user.role }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

exports.validateToken = (token, secret) => {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};
