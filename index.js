var express = require('express');
var mongoose = require('mongoose');
var app = express();
/**
 * Uncomment these lines if you need cross origin domain request.
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var Kitten = require('./models/kittens')(mongoose);

mongoose.connect('mongodb://localhost/test');

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
  var fluffy = new Kitten({ name: 'fluffy2' });

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    res.send(fluffy);
  });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});
