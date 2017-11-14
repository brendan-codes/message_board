// this is routes.js, all of our backend routing will go through this file.

// first we get our requires out of the way, whihc includes all our controllers
var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');

// module.exports defines the OTHER SIDE of a require() statement.
// anything put on the other side of the equal sign will be returned
// when this file is run with require()

// in this case, module.exports returns a function that takes app!
module.exports = function(app){

  // this is the basic http route, we can also write it in one line like below
  app.get('/', function(req, res){
    posts.index(req, res);
  });

  // this is the same route in shorthand
  // 	app.get('/', posts.index);

  app.post('/comments/:id', function(req, res){
    comments.create(req, res);
  })

  app.post('/posts', function(req, res){
    posts.create(req, res);
  });

}
