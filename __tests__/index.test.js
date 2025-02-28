const http = require('http');
const { spawn } = require('child_process');

let serverProcess;

beforeAll((done) => {
  serverProcess = spawn('node', ['index.js']);
  setTimeout(done, 1000); // Give the server 1 second to start
});

afterAll(() => {
  serverProcess.kill(); // Kill the server process after tests
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

test('Server should respond with All Hail CI/CD King Mahendra!', (done) => {
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      expect(data).toBe('All Hail CI/CD King Mahendra\n');
      done();
    });
  });
  req.end();
});
