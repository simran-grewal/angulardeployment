
var express = require('express');
var router = express.Router();
//var Data = require('../models/user');

router.get('/', function(req, res, next){
    res.render('index');
});

/*
router.get('/', function (req, res, next) {
    Data.findOne({}, function(err, doc){
        if(err)
        {
            return res.send('Error!!');
        }

        res.render('node', {email: doc.email});

    })

});
*/
/*
router.post('/', function(req, res, next){
    var email = req.body.email;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var password = req.body.password;
   var data = new Data({
       firstName: firstName,
       lastName: lastName,
       password: password,
       email: email
   });
    data.save();
    res.redirect('/');
});
*/
/*
router.get('/message/:msg', function (req, res, next) {
    res.render('node', {message: req.params.msg});
});
router.get('/simran', function (req, res, next) {
    res.render('simu', {abc: "Hello  Simu!"});
});
router.post('/message', function(req, res, next){
   var mes = req.body.message;
    res.redirect('/message/' + mes);
});
*/
module.exports = router;
/*
var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc) {
        if (err) {
            return res.send('Error!');
        }
        res.render('node', {email: doc.email});
    });
});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Max',
        lastName: 'Schwarz',
        password: 'super-secret',
        email: email
    });
    user.save();
    res.redirect('/');
});
*/
//module.exports = router;
