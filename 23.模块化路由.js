const express = require('express');
const app = express();
//导入路由模块
const router = require('./24.router');
//挂载到app上
// 2.使用app.use() 注册路由模块，并添加统一的访问前缀/api
app.use('/api', router);
//注意:app.use() 函数的作用， 就是来注册全局中间件
app.listen(80, function () {
    console.log('server running at http://127.0.0.1')
})