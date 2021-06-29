const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log('done with reading the first file');
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log('done with reading the seond file');
    writeFile(
      './content/result-async.txt', 
      `first: ${first}, second: ${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting the next one');