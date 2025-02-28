const http = require('http');
const { spawn } = require('child_process');

let serverProcess;

beforeAll(async () => {
  serverProcess = spawn('node', ['index.js']);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Give server 2 seconds to start
});

afterAll(() => {
  serverProcess.kill(); // Kill the server after tests
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

test('Server should respond with All Hail CI/CD King Mahendra!', async () => {
  const data = await new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let response = '';
      res.on('data', (chunk) => {
        response += chunk;
      });
      res.on('end', () => resolve(response));
    });

    req.on('error', reject);
    req.end();
  });

  expect(data).toBe('All Hail CI/CD King Mahendra\n');
});
