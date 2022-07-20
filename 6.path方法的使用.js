const path = require('path');
//../会抵消一层路径
const a = path.join('/a', '/b/c', '../', '/d', '/e');
console.log(a);
const b = path.join(__dirname, './files/2.txt');
console.log(b);
const fs = require('fs');
fs.readFile(path.join(__dirname, './files/2.txt'), "utf8", function (err, dataStr) {
    if (err) {
        console.error(err.message);
    }
    console.log(dataStr);
});