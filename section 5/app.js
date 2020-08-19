const http = require('http');

const express = require('express');

const app = express();




// app.use((req, res, next) => {
// 	console.log('In the middleware!');
// 	next(); // Allows the request to continue to the next middleware in line
// });



app.use('/add-product', (req, res, next) => {
	console.log('In another middleware!');
	res.send("Add product!");
});


app.use('/', (req, res, next) => {
	console.log('In another middleware!');
	res.send("He Ha!");
});


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);