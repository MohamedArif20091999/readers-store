const { Pool } = require('pg');
const keys = require('./config/keys');

const connect = keys.pgConString;
const pool = new Pool({ connectionString: connect });
pool.on('connect', () => {
  console.log('Database connected');
});

module.exports = pool;
