const fs = require('fs');

fs.readFile('file.txt','utf8', (err,data) => {
  if(err) {
    if(err.code === 'ENOENT'){
      console.error('ERROR: FILE NOT FOUND');}
      else{
        console.error('Error reading the file:',err.message);
      }
      return;
  }
  console.log('File content:', data);
});
