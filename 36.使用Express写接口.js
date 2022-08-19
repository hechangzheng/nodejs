//导入express模块
const express = require('express');
//定义express服务实例
const app = express();
//解析 JSON 格式的数据
app.use(express.json());
//解析 url-encoded 格式的数据
app.use(express.urlencoded({
    extended: false
}));

//必须在配置cors中间件之前，配置JSONP的接口
app.get('/api/jsonp', (req, res) => {
    //TODO:定义JSONP 接口具体的实现过程
    // 1.得到函数的名称
    const funcName = req.query.callback
    // 2.定义要发送到客户端的数据对象
    const data = {
        name: '张三',
        age: 20
    };
    // 3.拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    // 4.把拼接的字符串，响应给客户端
    res.send(scriptStr);
});

//一定要在路由之前，配置cors 这个中间件，从而解决接跨域的问题
const cors = require('cors');
app.use(cors());

const router = require('./37.apiRouter');
//把路由注册到app模块
app.use('/api', router);

//调用app. listen方法,指定端口号并启动web服务器
app.listen(80, () => {
    console.log('http: //127.0.0.1:80');
});