var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '598356331597-huulk2g1cqljdha5f66rp5f9ma4fpjbm.apps.googleusercontent.com',
      clientSecret: '3b-63rGND4swmEa4YglT4bGm',
      callbackURL: 'http://127.0.0.1:3000/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate(
        { userid: profile.id },
        { name: profile.displayName, userid: profile.id },
        function(err, user) {
          return done(err, user);
        }
      );
    }
  )
);

module.exports = passport;
