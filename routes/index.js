const db = require('../db')
var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET foods list */
router.get('/foods', function (req, res, next) {
  db.query('SELECT * FROM foods', null, (err, res) => {
    if (err) {
      return next(err)
    }
    console.log(res.rows)
    req.res.render('foods', {foods: res.rows})
  })
})

module.exports = router
