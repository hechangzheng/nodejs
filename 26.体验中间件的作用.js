const express = require('express');
const app = express();

//全局中间件的简化形式
app.use((req, res, next) => {
    //获取请求到达中间件时间    
    const date = Date.now();
    req.startTime = date;
    next();
});

app.get('/', (req, res) => {
    res.send('Home page' + req.startTime);
});
app.get('/user', (req, res) => {
    res.send('User page');
});
app.listen(80, () => {
    console.log('http://127.0.0.1:80' + req.startTime);
})