var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/adminlogin', function(req, res, next) {
  res.render('adminlogin',{ msg:''

  });

});


router.post('/checklogin', function(req, res, next) {

    var email = req.body.emailid
    var password = req.body.password

    if(email=="xelpmoc@gmail.com" && password=="12345")
    {
        res.redirect("/adminlogin/fibonacciseries")
    }
    else
    {
        res.render('adminlogin',{msg:"Invalid ID / Password"})
    }
    

    });


router.get('/fibonacciseries', function(req, res, next) {
    
    
    
    res.render('fibonacciseries');
    
  });


module.exports = router;