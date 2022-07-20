const fs = require("fs");
//2.调用fs. writeFile()方法，写入文件的内容
//参数1:表示文件的存放路径
//参数2:表示要写入的内容
//参数3:回调函数
//无论写入成功还是失败，都会调用function()
fs.writeFile("./files/2.txt", "asddsfdasdadasdasdasd", "utf-8", function (err) {
    //2.1如果文件写入成功，则err的值等于null
    //2.2如果文件写入失败，则err的值等于一个错误对象
    if (err) {
        return console.log("内容写入失败" + err.message);
    }
    console.log("内容写入成功！！！");
});