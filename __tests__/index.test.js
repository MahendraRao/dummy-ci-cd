const http = require('http');
const { spawn } = require('child_process');

let serverProcess;

beforeAll((done) => {
  serverProcess = spawn('node', ['index.js']);
  setTimeout(done, 3000); // Wait 3 seconds to make sure the server is running
});

afterAll(() => {
  serverProcess.kill(); // Gracefully shutdown server
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
      try {
        expect(data.trim()).toBe('Hello, Mahendra the CI/CD KING!');
	done();
      } catch (error) {
        done(error);
      }
    });
  });

  req.on('error', (err) => {
    console.error(err);
    done(err);
  });

  req.end();
});
