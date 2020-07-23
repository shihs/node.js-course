const http = require('http'); // 載入 Node.js 原生模組 http
const fs = require('fs');

// function rqListener(req, res) {

// }
// http.createServer(rqListerner);


// 建立server
const server = http.createServer((req, res) => { 	
 	// 在此處理客戶端向 http server 發送過來的 req。
	// console.log(req);
	// console.log(req.url, req.method, req.headers);

	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write('<body><form action="/message", method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html>');
		return res.end();

	}

	if (url === '/message' && method === 'POST') {
		fs.writeFileSync('message.txt', 'DUMMY');
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}

	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
	res.write('</html>');
	res.end();
});

// console.log(server);

server.listen(3000); //進入此網站的監聽 port, 就是 localhost:xxxx 的 xxxx

