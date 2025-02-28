const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

test('Server should respond with Hello, CI/CD Pipeline!', (done) => {
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      expect(data).toBe('Hello, CI/CD Pipeline!\n');
      done();
    });
  });
  req.end();
});

