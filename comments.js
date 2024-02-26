// Create web server
// Create comments.js file and add the following code:

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// The code above is a simple web server that creates a server and listens on port 8080 for connections. It serves the file requested by the client. We use the fs module to read the requested file and return the content to the client.

// Save the file on your computer, and navigate to http://localhost:8080/comments.html to see the result. If you want to use a different filename, then change the value of the filename variable.