const http = require('http');


// const server = http.createServer((req, res) => {
//   res.end('Welcome');
// });

const server = http.createServer();
// emits request event
// subcribe to it / listen for it / response to it
server.on('request', (req, res) => {
  res.end('Welcome'); 
})


server.listen(5000);