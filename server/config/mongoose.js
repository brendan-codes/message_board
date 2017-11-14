// mongoose.js is designed to load all of our models when the app first starts.

// require mongoose and file search
var mongoose = require('mongoose');
var fs = require('fs');

// connect to the proper DB
mongoose.connect('mongodb://localhost/message_board_db1');

// define the models_path, where do the models live relative to this document?
// our models are up one level and then into the models folder. we define
// this route here
var models_path = __dirname + '/../models'

// this looks a little scary at first, but all this function is doing is
// loop through our models folder and requires any files it finds inside
// provided they end with '.js'

// this is useful because it declares all of our models no matter how many we make,
// but also only defines the database connection one time.
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})
