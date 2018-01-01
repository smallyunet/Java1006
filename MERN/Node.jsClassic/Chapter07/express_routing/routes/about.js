var express = require('express');
var router = express.Router();

/* GET about listing. */

router.get('/', function(req, res, next) {
    res.send('Hello from the about route!');
});

module.exports = router;
