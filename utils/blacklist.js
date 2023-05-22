const blacklistedTokens = [];

exports.isBlacklisted = (token) => {
  return blacklistedTokens.includes(token);
};

exports.addToBlacklist = (token) => {
  blacklistedTokens.push(token);
};
