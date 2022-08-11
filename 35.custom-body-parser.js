//导入处理querystring的Node.js 内置模块
const qs = require('querystring');

const bodyParser = (req, res, next) => {
    //定义中间件具体的业务逻辑
    //定义一个str字符串，专用来存储客户端发送过来的请求体数据
    let str = ''

    //监听req的data事件
    req.on('data', (chunk) => {
        str += chunk
    })
    //监听req的end事件
    req.on('end', () => {
        //在str中存放的是完整的请求体数据
        console.log(str);
        console.log('================================');
        const body = qs.parse(str);
        console.log(body);
        req.body = body;
        // TODO: 把字符串格式的请求体数据， 解析成对象格式
        next()
    })
}

module.exports = bodyParser;