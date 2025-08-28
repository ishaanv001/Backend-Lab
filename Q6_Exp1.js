const fs = require('fs');

const inputPath = 'input.txt';
const outputPath = 'output.txt';

// Check if input file exists
fs.access(inputPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Error: File "${inputPath}" not found.`);
    return;
  }

  // Create readable and writable streams
  const readStream = fs.createReadStream(inputPath, { encoding: 'utf-8' });
  const writeStream = fs.createWriteStream(outputPath);

  // Pipe the streams
  readStream.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log(`Data successfully piped from "${inputPath}" to "${outputPath}".`);
  });

  readStream.on('error', (error) => {
    console.error('Error reading input file:', error.message);
  });

  writeStream.on('error', (error) => {
    console.error('Error writing to output file:', error.message);
  });
});
