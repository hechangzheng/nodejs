//导入express模块
const express = require('express');
//定义express服务实例
const app = express();
//导入自己封装的中间件模块
const customBodyParser = require('./35.custom-body-parser');
//2.将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser);
app.post('/user', (req, res) => {
    res.send(req.body);
});
//调用app. listen方法，指定端口号并启动web服务器
app.listen(80, () => {
    console.log('http://127.0.0.1:80');
});