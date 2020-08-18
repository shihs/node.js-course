const fs = require('fs');


const requestHandler = (req, res) => {

	const url = req.url;
	const method = req.method;

	if (url === '/') {
		// console.log(method);
		res.write('<html>');
		res.write('<head><title>Assignment 1</title></head>');
		res.write('<body><div><h1>Hello from the other side</h1>');
		res.write('<hr/>')
		res.write('<form action="/create-user", method="POST"><input type="text" name="username" placeholder="User name"><button type="submit">Submit</button></form></div></body>')
		res.write('</html>');
		return res.end();
	}

	if (url === '/create-user' && method === 'POST') {
		console.log(method);
		const body = [];
		// on allows us to listen to certain event
		req.on('data', (chunk) => {
			// console.log("This is chunk!");
			// console.log(chunk);
			body.push(chunk); // push a new element
		});
		return req.on('end', () => {
			const parseBody = Buffer.concat(body).toString();			
			const username = parseBody.split('=')[1];
			console.log(username);
			res.statusCode = 302; // 302 stands for redirection
			res.setHeader('Location', '/');
			return res.end();
		});
	}
};


module.exports = requestHandler;








