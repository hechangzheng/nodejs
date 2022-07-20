const fs = require('fs');
//尝试从上一目录下读取文件，会读取失败，  ../读取文件是将 本地路径+../路径/文件
//路径动态拼接产生的错误   如果要解决这个问题，可以直接提供一 个完整的文件存放路径就行  路径需要使用双斜线   移植性非常差、不利于维护

// fs.readFile("./files/测试.txt", "utf-8", function (err, data) {
//     if (err) return console.log("读取文件失败" + err.message);
//     console.log("读取成功" + data);
// });

//__dirname 表示当前文件所处的目录
console.log(__dirname);

fs.readFile(__dirname + "/files/测试.txt", "utf-8", function (err, data) {
    if (err) return console.log("读取文件失败" + err.message);
    console.log("读取成功" + data);
});