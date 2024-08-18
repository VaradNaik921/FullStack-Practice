const http = require('node:http');
const fs = require('node:fs');

const posts = JSON.parse(fs.readFileSync('posts.json', 'utf8'));

http.createServer(function (req, res) {
    let url = req.url;

    if (url === '/posts') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(posts));
    } else if (url.startsWith('/posts/')) {
        let urlPaths = url.split('/');
        let id = parseInt(urlPaths[urlPaths.length - 1]);

        const post = posts.find(p => p.id === id);
        if (post) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(post));
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Post not found');
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});
