let cachedUserId;

const setCachedUserId = (userId) => {
  cachedUserId = userId;
};

const getCachedUserId = () => {
  return cachedUserId;
};

module.exports = { setCachedUserId, getCachedUserId };

