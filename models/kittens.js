var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kittySchema = new Schema({
  name: String
});

module.exports = mongoose.model('Kitten', kittySchema);
