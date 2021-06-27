const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const pool = require('./pool');
require('./services/passport');

const app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

app.use('/auth', authRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log('Server startted');
});
