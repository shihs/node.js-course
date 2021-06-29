const EventEmitter = require('events');

const costomEmitter = new EventEmitter();

costomEmitter.on('response', (name, id) => {
  console.log(`data receieved user ${name} with id: ${id}`);
});
costomEmitter.on('response', () => {
  console.log('second data receieved!');
});


costomEmitter.emit('response', 'John', 30);