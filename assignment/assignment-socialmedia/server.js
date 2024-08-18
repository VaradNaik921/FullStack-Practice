const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = 8080;

http.createServer(function (req, res) {
    let filePath = '';

    
    if (req.url === '/' || req.url === '/login') {
        filePath = './login.html';
    } else if (req.url === '/register') {
        filePath = './register.html';
    } else if (req.url === '/feed') {
        filePath = './feed.html';
    } else if (req.url === '/profile') {
        filePath = './profile.html';
    } else if (req.url.startsWith('/css/') || req.url.startsWith('/js/')) {
        filePath = `.${req.url}`;
    } else if (req.url.endsWith('.html') || req.url.endsWith('.css') || req.url.endsWith('.js')) {
        filePath = `.${req.url}`;
    } else {
        filePath = './404.html';
    }

    let contentType = 'text/html';
    if (filePath.endsWith('.css')) {
        contentType = 'text/css';
    } else if (filePath.endsWith('.js')) {
        contentType = 'application/javascript';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.write('<html><body><h1>Server Error</h1></body></html>');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
        }
        res.end();
    });
})
.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});