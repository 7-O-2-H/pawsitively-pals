const express = require('express');
const router = express.Router();
const reviewQueries = require('../db/queries/reviews');


/* GET home page. */
router.get('/index', function(req, res) {
  reviewQueries.getReviews()
  .then(data => {
    res.json(data)
  })
});

module.exports = router;
