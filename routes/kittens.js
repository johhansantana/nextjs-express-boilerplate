var Kitten = require('../models/kittens');
module.exports = function(app, router){

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

  //other routes..
};