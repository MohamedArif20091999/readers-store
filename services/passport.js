const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log('ref:', refreshToken);
      console.log(profile.id);
      const user = await User.findOne({ where: { google_id: profile.id } });
      if (!user) {
        console.log('user is not defined');
        const user = await User.create({
          google_id: profile.id,
          email: profile.emails[0].value,
          username: profile.displayName,
        });
        done(null, user);
      } else {
        done(null, user);
        console.log(user.email);
      }
    }
  )
);
