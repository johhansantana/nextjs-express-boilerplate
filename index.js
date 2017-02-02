var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var app = express();
var Kitten = require('./models/kittens');

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

// mongoose.connect('mongodb://localhost/test');
mongoose.connect(process.env.MONGO_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use('/api', router);

router.route('/kittens')

  .get(function (req, res) {
    Kitten.find(function (err, kittens) {
      if (err) return res.send(err);
      res.send(kittens);
    });
  })

  .post(function (req, res) {
    var cat = new Kitten();
    cat.name = req.body.name;

    cat.save(function (err, cat) {
      if (err) return res.send(err);
      res.send({message: 'cat created', cat: cat});
    });
  });

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});
