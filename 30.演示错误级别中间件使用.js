const express = require('express');
const app = express();

//创建路由
app.get('/', (req, res) => {
    //人为制造错误
    throw new Error('服务器内部发生错误');
    res.send('Home page1');
});
//2. 定义错误级别的中间件， 捕获整个项目的异常错误， 从而防止程序的崩溃
app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message);
    res.send(err.message);
});

app.listen(80, () => {
    console.log('http://127.0.0.1:80');
});