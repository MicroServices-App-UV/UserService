let cachedUserId;

const setCachedUserId = (userId) => {
  cachedUserId = userId;
  console.log("XD",cachedUserId)
};

const getCachedUserId = () => {
  return cachedUserId;
};

module.exports = { setCachedUserId, getCachedUserId };

