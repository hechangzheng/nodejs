const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer();
server.on('request', (req, res) => {
    const url = req.url;
    // const fpath = path.join(__dirname, url);
    let fpath = '';
    if (fpath === '/') {
        path.join(__dirname, './clock/index.html');
    } else {
        path.join(__dirname, './clock', url);
    }
    fs.readFile(fpath, 'utf8', (err, data) => {
        if (err) return res.end('404 Not Found');
        res.end(data);
    });
})

server.listen(80, function () {
    console.log('Server running at http://127.0.0.1:');
});