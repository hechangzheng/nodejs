//导入express模块
const express = require('express');
//定义express服务实例
const app = express();
// 1.导入session中间件
var session = require('session');
//一定要在路由之前,配置cors 这个中间件，从而解决接跨域的问题
const cors = require('cors');
//解析 JSON 格式的数据
app.use(express.json());
//解析 url-encoded 格式的数据
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
// 2.配置Session中间件
app.use(session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true
}));
app.post('/api/login', (req, res) => {
    //判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' && req.body.password !== '00000') {
        return res.send({
            status: 1,
            msg: '登陆失败'
        });
    }
    //注意:只有成功配置了express-session这个中间件之后，才能够通过req点出来session这个属性
    //将用户的信息，存储到Session 中
    req.session.user = req.body;
    //将用户的登录状态，存储到Session 中
    req.session.islogin = true

    res.send({
        status: 0,
        msg: '登陆成功'
    });
});
app.get('/api/username', (req, res) => {
    //判断用户是否登录
    if (!req.session.islogin) {
        return res.send({
            status: 1,
            msg: 'fail'
        });
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    });
});
//退出登录的接口
app.post('/api/logout', (req, res) => {
    //清空当前客户端对应的session信息
    require.session.destroy();
    res.send({
        status: 0,
        msg: '退出登录成功'
    });
});
//调用app. listen方法,指定端口号并启动web服务器
app.listen(80, () => {
    console.log('http: //127.0.0.1:80');
});