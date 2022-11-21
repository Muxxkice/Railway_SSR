const http = require('http');
const port = 9000;
const server = http.createServer((request, response) => {

	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write('Hello World');
	response.end();
});

server.listen(port);
console.log('Server listen on port ' + port);
