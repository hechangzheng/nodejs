//⑤ 导入格式化时间的自定义模块
const TIME = require('./17.dateFormat');
//⑥ 调用格式化时间的函数
const dt = new Date(Date.now());

const newDT = TIME.dataFormat(dt);
console.log(newDT);