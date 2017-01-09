module.exports = function (mongoose) {
  var kittySchema = mongoose.Schema({
    name: String
  });

  var Kitten = mongoose.model('Kitten', kittySchema);

  return Kitten;
};