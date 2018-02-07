var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  var user = {
    first_name: 'Barak',
    surname: 'Obama',
    address: 'The White House',
    facebook_friends: '10000000000'
  };
  res.render('user.jade', {title: 'User', user: user});
});

/* 在路由中使用参数 */
router.get('/:id', function(req, res, next) {
    res.send('show content for user id ' + req.params.id);
});

module.exports = router;
