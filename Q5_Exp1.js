const fs = require('fs');
const path = 'output.txt';

// Create a writable stream (overwrites if the file exists)
const writeStream = fs.createWriteStream(path, { encoding: 'utf-8' });

writeStream.write('Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing to file:', err.message);
    return;
  }
  console.log(`Data successfully written to "${path}".`);
});

writeStream.end();
