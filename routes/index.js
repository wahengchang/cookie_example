var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res){
  if (req.cookies.remember) {
    res.send('Remembered :). Click to <a href="/forget">forget</a>!.');
  } else {
    res.send('<form method="post"><p>Check to <label>'
      + '<input type="checkbox" name="remember"/> remember me</label> '
      + '<input type="submit" value="Submit"/>.</p></form>');
  }
});

router.get('/forget', function(req, res){
  res.clearCookie('remember');
  res.redirect('back');
});

router.post('/', function(req, res){
  var minute = 60 * 1000;
  if (req.body.remember) res.cookie('remember', 1, { maxAge: minute });
  res.redirect('back');
});


router.get('/cookie',function(req, res){
  console.log("Cookies :  ", req.cookies);
    res.send('Cookies: '+JSON.stringify(req.cookies));
});


module.exports = router;
