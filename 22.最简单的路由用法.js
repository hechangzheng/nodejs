const express = require('express')
//创建Web服务器，命名为app
const app = express();
//挂载路由
app.get('/', (req, res) => {
    res.send('Hello world.');
})

app.post('/', (req, res) => {
    res.send('Post Request.');
})
//启动Web服务器
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})