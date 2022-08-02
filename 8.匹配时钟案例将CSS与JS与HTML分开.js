const fs = require('fs');

const path = require('path');
// 1.3定义正则表达式，分别匹配<style></style> 和<script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
//读取文件
fs.readFile(path.join(__dirname, './test.html'), 'utf8', (err, dataStr) => {
    if (err) return console.error('读取Html文件失败' + err.message);
    console.log('读取成功');
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});

function resolveCSS(htmlStr) {
    //使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    //将提取出来的样式字符串，进行字符串的replace 替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    //调用fs.writeFile()
    fs.writeFile(path.join(__dirname, './css/index.css'), newCSS, err => {
        if (err) return console.log("写入样式文件失败：" + err.message);
        console.log("写入样式文件成功！！！");
    })
}

function resolveJS(htmlStr) {
    //使用正则表达式提取需要的内容
    const r2 = regScript.exec(htmlStr);
    //将提取出来的js字符串，进行字符串的replace 替换操作
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    //调用fs.writeFile()
    fs.writeFile(path.join(__dirname, './js/index.js'), newJS, err => {
        if (err) return console.log("写入js文件失败:" + err.message);
        console.log("写入js文件成功!!!");
    })
}

function resolveHTML(htmlStr) {
    //使用字符串的replace法，正则匹配把内嵌的<style>和<script> 标签，替换为外联的<link> 和<script>标签
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./css/index.css"/>')
        .replace(regScript, '<script src="./js/index.js"></script><script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>');
    //调用fs.writeFile()
    fs.writeFile(path.join(__dirname, './index.html'), newHtml, 'utf8', err => {
        if (err) return console.log("写入html文件失败：" + err.message);
        console.log("写入html文件成功！！！");
    })
}