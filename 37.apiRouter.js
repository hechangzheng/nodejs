const express = require('express');
const router = express.Router();
//挂载路由
router.get('/get', (req, res) => {
    //通过req.query()获取请求内容
    const query = req.query
    //调用res.send()方法，向客户端响应结果
    res.send({
        //状态，200表示成功，1表示失败
        status: 200,
        //状态描述
        msg: 'GET请求成功!',
        //需要响应给客户端的具体数据
        data: query
    });
});

router.post('/post', (req, res) => {
    //通过req.body()获取请求内容
    const body = req.body
    //调用res.send()方法，向客户端响应结果
    res.send({
        //状态，200表示成功，1表示失败
        status: 200,
        //状态描述
        msg: 'POST请求成功!',
        //需要响应给客户端的具体数据
        data: body
    });
});

router.delete('/delete', (req, res) => {
    //调用res.send()方法，向客户端响应结果
    res.send({
        //状态，200表示成功，1表示失败
        status: 200,
        //状态描述
        msg: 'DELETE请求成功!'
    });
});
module.exports = router;