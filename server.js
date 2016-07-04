var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('login');
});

app.listen(3000);
module.exports = app;