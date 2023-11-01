const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Hello, Node.js Web App!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Not Found');
    }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
