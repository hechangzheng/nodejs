const path = require('path');
const fpath = "/a/b/c/index.html";
//获取带拓展名的文件名
var fileName = path.basename(fpath);
console.log(fileName);
//获取不带拓展名的文件名
const nameWithoutExt = path.basename(fpath, '.html');
console.log(nameWithoutExt);
//获取文件拓展名
var ext = path.extname(fpath);
console.log(ext);