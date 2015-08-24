var http = require('http');
var fs = require('fs');

//function onRequest(request, response) {
//  console.log('A user made a request on ' + request.url);
//  response.writeHead(200, {'Context-Type': 'text/plain'});
//  response.write('Here is some data');
//  response.end();
//}

// 404 response
function send404Response(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('404: Page not found.');
  response.end();
}

// Handle user request
function onRequest(request, response) {
  console.log('A user made a request on ' + request.url);
  if (request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./index.html').pipe(response);
  } else {
    send404Response(response);
  }
}

http.createServer(onRequest).listen(8888);
console.log('Server is ranning now...!');
