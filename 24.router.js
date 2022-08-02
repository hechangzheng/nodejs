//这是路由模块
//导入express模块
const express = require('express');
//创建路由对象
const router = express.Router();
//挂载具体的路由
router.get('/user/list', function (req, res) {
    res.send('Get user list');
});
router.post('/user/create', function (req, res) {
    res.send('Create user');
});
//向外导出路由对象
module.exports = router;