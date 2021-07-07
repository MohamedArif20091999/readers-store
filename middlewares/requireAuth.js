module.exports = (req, res, next) => {
  if (!req.user) {
    return res.send({ status: 'unAuthenticated' });
  }
  next();
};
