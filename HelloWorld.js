console.log('HelloWorld!!!');
const username = '张三';

function sayHello(param) {
    console.log('大家好，我是' + username);
}

console.log(module);

const age = 20;
//在一个自定义模块中，默认情况下， module . exports = {}
//向module.exports对象上挂载username属性
module.exports.username = 'zs';
//向module.exports对象上挂载sayHello 方法
module.exports.sayHello = function () {
    console.log('HelloWorld!!!');
}
module.exports.age = age;

module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('Hi!!!');
    }
}

exports.username = 'zs';
exports.sayHello = function () {
    console.log('HelloWorld!!!');
}

exports.age = age;