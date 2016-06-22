// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
//app.get('/', function(req, res){
  //res.send('Hello') -- Shows what send does, sends response to the browser body

  //Part Two
  //var fileContents = fs.readFileSync('data.txt');
  //res.header('Content-Type', 'text/html');
  //res.send(fileContents)

  //Part Three
  //fs.readFile('data.txt', function(err, data) {
     // do something with data here
     //if (err) {
        //console.error(err);
     //}
     //res.header('Content-Type', 'text/html');
     //res.send(data)
  //})
// })

//Bonus
/*Modify your route to allow the user to request any file by name. Files should be read from the 'public' folder. For example, http://localhost:PORT/data1.txt should respond with the contents of MYPROJECT/public/data.txt.*/
app.get('/:filename', function(req, res) {
    // access value of :filename with req.params.filename
    req.params.filename
    console.log(req.params);
    // read the file with the specified filename
    var fileContents = fs.readFileSync(req.params.filename);
    // save contents of the file that was read into a variable
    // send the contents of the file to the user
    res.header('Content-Type', 'text/html')
    res.send( fileContents )
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})
