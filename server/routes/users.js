const express = require('express');
const router = express.Router();
const { pool } = require('../db/queries/pool');
const userQueries = require('../db/queries/users')

router.get('/users', function(req, res) {
  userQueries.getAllUsers()
  .then(data=> {
    res.json(data)
  });
});

module.exports = router;
