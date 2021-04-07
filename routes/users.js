var express = require('express');
var router = express.Router();
const authModule = require('../middleware/auth');
router.use(authModule.auth);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.user);
});

module.exports = router;
