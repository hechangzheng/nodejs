//导入http模块
const http = require('http');
//创建web服务器实例
const server = http.createServer();
// 3.为服务器实例绑定request 事件，监听客户端的请求
server.on('request', (req, res) => {
    // req.url 是客户端请求的URL地址
    const url = req.url;
    // req.method 是客户端的method 请求类型'
    const method = req.method;
    const str = `Your request url is ${req.url}, and request method is ${req.method}`;
    console.log(str);
    res.end(str);
});
// 4.启动服务器
server.listen(8080, function () {
    console.log('http server running at http://127.0.0.1:8080')
})