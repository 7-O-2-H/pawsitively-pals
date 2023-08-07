const express = require('express');
const router = express.Router();
const reviewQueries = require('../db/queries/reviews');


/* GET home page. */
router.get('/', function(req, res) {
  reviewQueries.getReviews()
  .then(data => {
    console.log(data)
    res.json(data)
  })
});

module.exports = router;
