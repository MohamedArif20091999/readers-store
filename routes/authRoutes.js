const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', passport.authenticate('google'));

router.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

router.get('/api/user', (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;
