module.exports = (req, res, next) => {
  if (!req.user) {
    console.log('if not user in auth check');
    return res.status(401).send({ error: 'You must log in!' });
  }
  next();
};
