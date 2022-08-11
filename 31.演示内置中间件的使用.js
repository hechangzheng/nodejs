const express = require('express');
const app = express();
//除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
//通过express.json()这个中间件，解析表单中的JSON 格式的数据
app.use(express.json());
//express.urlencoded() 这个中间件， 来解析表单中的url - encoded 格式的数据
app.use(express.urlencoded({
    extended: false
}));
//创建路由
app.post('/user', function (req, res) {
    //在服务器， 可以使用req.body 这个属性， 来接收客户端发送过来的请求体数据
    //如果不配置解析表单数据的中间件， 则req.body 默认等于undefined
    console.log(req.body);
    res.send('ok');
});
app.post('/book', function (req, res) {
    //在服务器，可以使用req.body 来获取JSON 格式的表单数据和url-encoded 格式的数据
    console.log(req.body);
    res.send('ok');
});
app.listen(80, () => {
    console.log('http://127.0.0.1:80');
});