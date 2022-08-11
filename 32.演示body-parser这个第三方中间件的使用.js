//导入express模块
const express = require('express');
//定义express服务实例
const app = express();

//导入解析表单数据的中间件body-parser
const parser = require('body-parser');
//使用app.use() 注册中间件
app.use(parser.urlencoded({
    extended: false
}));

app.post('/user', function (req, res) {
    //在服务器， 可以使用req.body 这个属性， 来接收客户端发送过来的请求体数据
    //如果不配置解析表单数据的中间件， 则req.body 默认等于undefined
    console.log(req.body);
    res.send('ok');
});
app.listen(80, () => {
    console.log('http: //127.0.0.1:80');
});