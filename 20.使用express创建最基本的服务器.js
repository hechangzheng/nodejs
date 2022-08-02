//1.导入express
const express = require('express');
//创建 express 服务器
const app = express();

//4. 监听客户端的GET和POST 请求， 并向客户端响应具体的内容
app.get('/user', function (req, res) {
    //express 提供的res.send() 方法， 向客户端响应个JSON 对象
    res.send({
        name: 'z',
        age: 20,
        sex: '男'
    });
});
app.post('/user', function (req, res) {
    //调用express 提供的res.send() 方法， 向客户端响应一个文本字符串
    res.send('请求成功');
});

app.get('/', function (req, res) {
    //通过req.query可以获取到客户端发送过来的查询参数
    //注意:默认情况下，req.query 是个空对象
    console.log(req.query);
    res.send(req.query);
});

//注意:这里的:id 是个动态的参数
app.get('/user/:id/:name?', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});
//启动 express 服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})