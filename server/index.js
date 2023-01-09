const http = require('http');
// const settings = require('../src/index.tsx');
const port = 9000;

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write('<h1>Hello World</h1>');
    response.end();
});
server.listen(port);
// server.listen(port, settings.host);
console.log(`http://localhost:${port}`);
