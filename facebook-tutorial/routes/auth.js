var express = require('express');
var passport = require('passport');


var FacebookStrategy = require('passport-facebook');
var db = require('../db');
var router = express.Router();

router.get('/login', function (req, res, next) {
  res.render('login');
});
router.get('/login/federated/facebook', passport.authenticate('facebook'));

module.exports = router;