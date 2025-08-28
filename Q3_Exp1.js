const http = require('http');
const fs = require('fs');
const path = 'file.txt';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Check if file exists
    fs.access(path, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }

      // Read the file asynchronously and send content as response
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Server error');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
