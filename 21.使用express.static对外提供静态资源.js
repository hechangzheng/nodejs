const express = require('express');
const app = express();

//在这里，调用express . static()方法，快速的对外提供静态资源
// 带前缀的访问对外资源  app.use('/abc',express.static('./clock'));   http://127.0.0.1/abc/index.html
//对外资源 访问http://127.0.0.1/index.html
app.use(express.static('./clock'));
app.use(express.static('./files'));

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})