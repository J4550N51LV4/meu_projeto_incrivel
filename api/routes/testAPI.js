var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('A API está funcionando corretamente!!!Conseguimos!!!');
});

module.exports = router;