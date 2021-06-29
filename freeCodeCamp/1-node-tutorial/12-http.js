const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page.');
  } else if (req.url === '/about') {
    res.end('This is about page.');
  } else if (req.url === '/error') {
    res.end('This is error page.');
  } else {
    res.end(`<h1>Oops!</h1> <a href='/'>homepage</a>`);
  }
});


server.listen(5000);
