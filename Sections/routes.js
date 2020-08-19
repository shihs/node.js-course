const fs = require('fs');


const requestHandler = (req, res) => {

	const url = req.url;
	const method = req.method;

	if (url === '/') {
		console.log(method);
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write('<body><form action="/message", method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html>');
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		// console.log(method);
		const body = [];
		// on allows us to listen to certain event
		req.on('data', (chunk) => {
			console.log("This is chunk!");
			console.log(chunk);
			body.push(chunk); // push a new element
		});
		return req.on('end', () => {
			const parseBody = Buffer.concat(body).toString();
			console.log(parseBody);
			const message = parseBody.split('=')[1];
			// fs.writeFileSync('message.txt', message); // writeFileSync() 會在寫檔案這件事完成之後才往下進行下一行 code
			fs.writeFile('message.txt', message, err => {
				res.statusCode = 302; // 302 stands for redirection
				res.setHeader('Location', '/');
				return res.end();
			});
		});
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
	res.write('</html>');
	res.end();

};


module.exports = requestHandler;








