const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./db');
const User = require('./models/user');
const cookieSession = require('cookie-session');
require('./services/passport');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

app.use('/auth', authRoutes);
app.use('/product', productRoutes);

try {
  sequelize.sync().then(
    app.listen(process.env.PORT || 8080, () => {
      console.log('Server started');
    })
  );
} catch (err) {
  console.log(err);
}
