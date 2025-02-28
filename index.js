const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, CI/CD Pipeline!\n');
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
