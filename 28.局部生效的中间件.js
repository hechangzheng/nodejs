const express = require('express');
const app = express();

//定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部中间件');
    next();
}
//创建路由
app.get('/', mw1, function (req, res) {
    res.send('Home page');
});
app.get('/user', function (req, res) {
    res.send('User page');
});

app.listen(80, () => {
    console.log('http://127.0.0.1:80');
});