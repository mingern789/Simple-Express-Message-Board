var express = require('express');
var router = express.Router();

var messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.sender, added: new Date()});
  res.redirect('/')
});

module.exports = router;
