const { Pool } = require('pg');
const pool = new Pool({
  user: 'bestie',
  password: 'bestie',
  host: 'localhost',
  database: 'bestie'
});

module.exports = { pool };