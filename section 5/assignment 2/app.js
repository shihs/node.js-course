
const express = require('express');
const app = express();


// app.use('/', (req, res, next) => {
// 	console.log('In first middleware!');
// 	res.send("He Ha!");
// 	next();
// });


app.use('/users', (req, res, next) => {
	console.log('In users!');
	res.send("This is 'users' page!");
});


app.use('/', (req, res, next) => {
	console.log('In another middleware!');
	res.send("He Ha!");
});


app.listen(3000);