 http = require('http');
 
 var server = http.createServer(function(req, res) {
 res.writeHead(200);
 res.end(Helllo! Welcome to Mountio-Database Simple HTTP static Web Genartor Made by Github user Trafort');
 });
 server.listen(8082);
