//1.导入mysql模块
const mysql = require('mysql');
// 2.建立与MySQL 数据库的连接
const db = mysql.createPool({
    //数据库的IP地址
    host: '127.0.0.1',
    //登录数据库的账号
    user: 'root',
    //登录数据库的密码
    password: 'hchzh',
    //指定要操作哪个数据库
    database: 'my_db',
});

//检测mysql 模块能否正常工作
/*db.query('SELECT 1', (err, result) => {
    if (err) return console.log(err.message);
    //只要能打印出 [ RowDataPacket { '1': 1 } ]的结果， 就证明数据库连接正常
    console.log(result);
});*/
const sqlStr = 'SELECT * FROM users';
db.query(sqlStr, (err, result) => {
    if (err) return console.log(err.message);
    //查询数据成功
    //注意:如果执行的是gelect 查询语句，则执行的结果是数组
    console.log(result);
});

// 1.要插入到users表中的数据对象
const user = {
    username: 'zs',
    password: '123'
};
/*
// 2.待执行的SQL语句，其中英文的?表示占位符
const sqlStr1 = 'INSERT INTO users (username, password) VALUES (?, ?)';
//3.使用数组的形式，依次为?占位符指定具体的值
db.query(sqlStr1, [user.username, user.password], (err, result) => {
    if (err) return console.log(err.message);
    //affectedRows属性，表示插入响应的条数
    if (result.affectedRows == 1) {
        console.log('插入成功');
    }
});*/

//插入数据的便捷方式
const sqlStr2 = 'INSERT INTO users SET ?';
db.query(sqlStr2, user, (err, result) => {
    if (err) return console.log(err.message);
    //affectedRows属性，表示响应的条数
    if (result.affectedRows == 1) {
        console.log('插入成功');
    }
});

// 1.要更新的数据对象
const user1 = {
    id: 7,
    username: 'aaa',
    password: '000'
};
/*
//2.要执行的SQL语句
const sqlStr3 = 'UPDATE users SET username = ?,password = ? WHERE id = ?';
// 3.调用db.query() 执行SQL语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlStr2, [user1.username, user1.password, user1.id], (err, result) => {
    if (err) return console.log(err.message);
    //affectedRows属性，表示响应的条数
    if (result.affectedRows == 1) {
        console.log('修改成功');
    }
});*/

//5.更新数据的便捷方式
const sqlStr3 = 'UPDATE users SET ? WHERE id = ?';
db.query(sqlStr3, [user1, user1.id], (err, result) => {
    if (err) return console.log(err.message);
    //affectedRows属性，表示响应的条数
    if (result.affectedRows == 1) {
        console.log('修改成功');
    }
});

// 1.要执行的SQL语句
const sqlStr4 = 'DELETE FROM users WHERE id=?';
// 2.调用db.query() 执行SQL语句的同时，为占位符指定具体的值
//注意:如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//如果SQL语句中只有一一个占位符，则可以省略数组
db.query(sqlStr4, 5, (err, result) => {
    if (err) return console.log(err.message);
    //affectedRows属性，表示响应的条数
    if (result.affectedRows == 1) {
        console.log('删除成功');
    }
});

//标记删除:使用UPDATE 语句替代DELETE语句;只更新数据的状态，并没有真正删除
const sqlStr5 = 'UPDATE users SET status = ? WHERE id = ?';
db.query(sqlStr5, [1, 6], (err, result) => {
    if (err) return console.log(err.message);
    //affectedRows属性，表示响应的条数
    if (result.affectedRows == 1) {
        console.log('标记删除成功');
    }
});