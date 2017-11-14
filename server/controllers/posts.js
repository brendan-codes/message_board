var mongoose = require('mongoose');
var Post = mongoose.model('Post');


module.exports = (function(){
  return {

    index: function(req, res){
      // find Posts
      Post.
        find({}).                                     // as long as they're objects
        populate('_comments').                        // populate the comments
        exec(function(err, posts){                    // execute the query
          console.log(posts);
          res.render('index', {posts: posts});
       })
    },

    create: function(req, res){
      var new_post = new Post(req.body);
      console.log(new_post);
      new_post.save(function(err, results){
        if(err){
          console.log(err);
          console.log('somethin broke');
        }else{
          res.redirect('/');
        }
      })
    }

  }

})();
