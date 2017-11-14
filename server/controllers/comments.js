var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');


module.exports = (function(){
  return {
    
    // this is the create route of our comments controller
    create: function(req, res){
      // first we define specifcly out post data and pass it to a new_comment
      var comment_data = {name: req.body.name, comment: req.body.comment, post: req.params.id};
      var new_comment = new Comment(comment_data);

      // first we find the post we want to attach the comment to
      Post.findOne({_id: req.params.id}, function(err, post){
        
        // always check for errors
        if(err){
          console.log(err);
        }else{
          // provided there is no error, push the new_comment into the post
          post._comments.push(new_comment);

          // save the updated post
          post.save(function(err, results){

            // always check for errors
            if(err){
              console.log(err);
            }else{

              // provided the post saved and there was no error
              new_comment.save(function(err, comment_results){

                // always check for errors
                if(err){
                  console.log(err);
                }else{
                  // success! let's redirect
                  res.redirect('/');
                }
              })
            }
          })
        }

      })
    },

    read: function(req, res){
      // read logic
    },

    update: function(req, res){
      // update logic
    },

    delete: function(req, res){
      // delete logic
    }

  }
})()
