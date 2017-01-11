var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Kitten = require('./models/kittens')(mongoose);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
/**
 * Uncomment these lines if you need cross origin domain request.
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(process.env.MONGO_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log('all the kittens: ', kittens);
//   });
// });

app.get('/', function (req, res) {
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    res.send(kittens);
  });
});

app.post('/kitty', function (req, res) {
  console.log(req.body);
  var fluffy = new Kitten({ name: req.body.name });

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    res.send(fluffy);
  });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});
