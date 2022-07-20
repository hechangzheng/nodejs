//导入fs模块，来操作文件
const fs = require('fs');

//调用fs. readFile()方法读取文件
//参数1：读取文件存放的路径
//参数2：读取文件格式 拿到读取失败和成功的结果 err dataStr

fs.readFile('./files/测试.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log("读取失败：" + err.message);
    }
    console.log("读取成功！！！");
    console.log(dataStr);
});