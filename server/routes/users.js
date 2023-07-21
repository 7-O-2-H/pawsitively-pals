const express = require('express');
const router = express.Router();

const users = ['Bob', 'Alex', 'Will', 'Tristan'];

router.get('/', function(req, res) {
  res.json(users);
});

module.exports = router;
