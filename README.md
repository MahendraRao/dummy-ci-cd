# Dummy CI/CD Pipeline
This project demonstrates a basic CI/CD pipeline using GitHub Actions, Netlify, and Jest.
// Folder Structure
// ├── .github
// │   └── workflows
// │       └── ci-cd-pipeline.yml    # GitHub Actions workflow
// ├── index.js                     # Simple Node.js app
// ├── package.json                 # Dependencies and scripts
// ├── __tests__                    # Test directory
// │   └── index.test.js            # Jest test file
// └── README.md                    # Project explanation

// Step 1: index.js
// This is your simple Node.js app
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('All Hail CI/CD King Mahendra\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Step 2: package.json
// This file will contain the dependencies and scripts
// Run `npm init -y` to generate this file automatically
{
  "name": "dummy-ci-cd",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "http": "^0.0.1-security"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}

// Step 3: __tests__/index.test.js
// Jest test file to verify the server responds with the correct message
const http = require('http');

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

// Step 4: .github/workflows/ci-cd-pipeline.yml
// This is your CI/CD pipeline configuration
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm test

      - name: Deploy to Render
        run: echo "Deployed to Render"

// README.md
# Dummy CI/CD Pipeline
This project demonstrates a basic CI/CD pipeline using GitHub Actions, Render, and Jest.

## How It Works
1. Code is pushed to GitHub.
2. GitHub Actions installs dependencies, runs Jest tests, and deploys the app.
3. The app is deployed automatically to Render.

## How to Run Locally
```bash
npm install
npm start
npm test
```

## How to Deploy to Render
1. Go to [Render](https://www.render.com/).
2. Connect your GitHub Repository.
3. Deploy the app by setting up a Web Service.
4. Add `node index.js` as your Start Command.

## How to Push to GitHub
1. Initialize Git in your project folder:
```bash
git init
git remote add origin https://github.com/your-username/dummy-ci-cd.git
```

2. Add your files:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. Go to your GitHub repository to see the code.

4. Follow the Render instructions to deploy.
