// get all our require statements out at the top, store them to variables

// express will initialize our express app
var express = require('express');

// path is to help fix file paths across mac and linux, use it!
var path = require('path');

// body-parser gets us post data into the req.body, you MUST use it!
var bodyParser = require('body-parser');

// app is our express app, the express variable is just a function we must run
var app = express();



// now let's do all out settings and middlewares

// we must set a view engine if we're still rendering views
app.set('view engine', 'ejs');

// our view engine must to told where to find the views
app.set('views', path.join(__dirname, './client/views'));

// static content will get served for any request that matches the file path
// to this folder. running GET '/car1.jpeg' will go into the static folder and 
// look for any files called 'car1.jpeg'
app.use(express.static(path.join(__dirname, './client')));

// this actually sets up bodyparser with our express app
app.use(bodyParser.urlencoded({extended: false}));


// require mongoose.js for models
require('./server/config/mongoose.js');

// require routes.js for routing.
// this line is a little funky, but requiring routes will return a function.
// we then immediately run that function and pass it app. see routes.js for more details!
require('./server/config/routes.js')(app);

// finally, we must always listen on a port!
app.listen(8000, function(){
  console.log('message board on port 8000');
})
