var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: String,
  post: String,
  // an array of foreign keys, we can see by the square brackets.
  // type is an ObjectId, and it references the 'Comment' collection
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

// create the model
mongoose.model('Post', PostSchema);
