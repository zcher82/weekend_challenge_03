var express = require('express');
var app = express ();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index');



//port w/heroku
app.set('port', (process.env.PORT || 5000));


//mount middleware
app.use(bodyParser.urlencoded({extended: true}));


//routes
app.use('/', index);



app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
