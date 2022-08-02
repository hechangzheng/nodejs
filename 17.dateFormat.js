//①创建格式化时间的自定义模块
//② 定义格式化时间的方法
function dataFormat(dtStr) {
    const dt = new Date(dtStr);
    const year = dt.getFullYear();
    const month = padZero(dt.getMonth() + 1);
    const day = padZero(dt.getDate());
    const hour = padZero(dt.getHours());
    const minute = padZero(dt.getMinutes());
    const second = padZero(dt.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

//定义补零的表达式
function padZero(str) {
    return str > 9 ? str : '0' + str;
}

//④ 从自定义模块中导出格式化时间的函数

module.exports = {
    dataFormat
}