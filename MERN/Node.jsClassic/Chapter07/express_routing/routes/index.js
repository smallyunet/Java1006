var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send(req.body);
});

router.get('/test', function(req, res, next) {
  res.send('This is a test text!');
});

module.exports = router;
