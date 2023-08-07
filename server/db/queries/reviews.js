const { pool } = require('../queries/pool');
const db = require('../../configs/db.config');

const getReviews = () => {
  return db.query("SELECT * FROM reviews").then(data => {
    return data.rows;
  });
};

module.exports = { getReviews };