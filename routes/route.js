var express = require('express')
var connection = require('./db/db.js')
var router = express.Router()

router.get('/', function (req, res, next) {
  /*connection.query('SELECT * FROM suits', function (err, rows) {
    if (err) {
      req.flash('error', err)
      res.sendStatus(500);
    } else {
      res.json('suitlist', { data: rows });
    }
  })*/
  res.send('connected successfully');
})
module.exports = router