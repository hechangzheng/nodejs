const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    const str = `您请求的URL的地址是${req.url},您求的method类型为${req.method}`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(str);
});
server.listen(80, function () {
    console.log('http server running at http://127.0.0.1');
});