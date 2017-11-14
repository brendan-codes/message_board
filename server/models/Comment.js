// comment model

// declare any variables we may need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// comment schema
var CommentSchema = new Schema({
  name: String,
  comment: String,
  // _post is our foreign key, the type is an ObjectId, the reference is
  // the collection we're getting the ids from, in this case 'Post'
  _post: {type: Schema.Types.ObjectId, ref: 'Post'}
});

// this line actually sets the model. it is not created until we run this line!
mongoose.model('Comment', CommentSchema);
