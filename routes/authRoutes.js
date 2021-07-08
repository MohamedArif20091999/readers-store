const express = require('express');
const passport = require('passport');
const requireAuth = require('../middlewares/requireAuth');
const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

router.get('/api/user', requireAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
