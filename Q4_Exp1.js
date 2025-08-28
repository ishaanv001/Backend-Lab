const fs = require('fs');
const path = 'file.txt';

// Check if the file exists
fs.access(path, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Error: File "${path}" does not exist.`);
    return;
  }

  // Create a readable stream
  const readStream = fs.createReadStream(path, { encoding: 'utf-8' });

  readStream.on('data', (chunk) => {
    console.log(`Data chunk: \n${chunk}`);
  });

  readStream.on('end', () => {
    console.log('Finished reading file.');
  });

  readStream.on('error', (error) => {
    console.error('Error reading file:', error.message);
  });
});
