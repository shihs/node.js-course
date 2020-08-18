const http = require('http'); // 載入 Node.js 原生模組 http


const router = require('./routes');

// 建立server
const server = http.createServer(router);

server.listen(3000); //進入此網站的監聽 port, 就是 localhost:xxxx 的 xxxx

