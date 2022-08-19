//导入express模块
const express = require('express');
//定义express服务实例
const app = express();
//一定要在路由之前,配置cors 这个中间件，从而解决接跨域的问题
const cors = require('cors');

// 1.导入用于生成JWT字符串的包
const jwt = require('jsonwebtoken');
// 2.导入用于将客户端发送过来的JWT字符串，解析还原成JSON对象的包
const expressJwt = require('express-jwt');

//解析 JSON 格式的数据
app.use(express.json());
//解析 url-encoded 格式的数据
app.use(express.urlencoded({
    extended: false
}));

//解决跨域问题
app.use(cors());

//使用app.use() 来注册中间件
// expressJWT({ secret: secretKey })就是用来解析Token 的中间件
//.unless({ path: [/^\/api\//] })用来指定哪些接不需要访问权限
//注意:只要配置成功了express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到req.user 属性上
app.use(expressJwt({
    secret: secretKey
}).unless({
    path: [/^\/api\//]
}));

//定义secret密钥
const secretKey = 'itheima No1 ^_^';
//
app.post('/api/login', (req, res) => {
    //判断用户提交的登录信息是否正确
    var userinfo = req.body;
    if (userinfo.username !== 'admin' && userinfo.password !== '00000') {
        return res.send({
            status: 400,
            message: '登陆失败'
        });
    }
    //调用jwt,sign() 生成JWT字符串，三个参数分别是:用户信息对象、加密密钥、配置对象,并通过token属性发送给客户端
    //参数1:用户的信息对象
    //参数2:加密的秘钥
    //参数3:配置对象，可以配置当前token的有效期
    const tokenStr = jwt.sign({
        username: userinfo.username
    }, secretKey, {
        expiresIn: '30s'
    });
    res.send({
        status: 200,
        message: '登陆成功',
        token: tokenStr
    });
});
//这是一个有权限的API接口
app.get('/admin/getinfo', (req, res) => {
    console.log(req.user);
    res.send({
        status: 200,
        msg: '获取用户信息成功!',
        data: req.user
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
// TODO .06: 使用全局错误处理中间件，捕获解析JWT失败后产生的错误
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 401,
            message: '无效的token'
        });
    }
    //其它原因导致的错误
    res.send({
        status: 500,
        message: '未知错误'
    });
});
//调用app. listen方法,指定端口号并启动web服务器
app.listen(80, () => {
    console.log('http: //127.0.0.1:80');
});