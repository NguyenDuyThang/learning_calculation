var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
//router.get('/index/:result', function(req, res, next) {
//    res.render('index', { result: req.params.result});
//});

module.exports = router;
