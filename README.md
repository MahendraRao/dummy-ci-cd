# Dummy CI/CD Pipeline
This project demonstrates a complete CI/CD Pipeline using GitHub Actions, Jest Testing, and Render for automated deployment.

##Tech Stack π₯

* Node.js
* GitHub Actions
* Jest
* Render

##Features

* Automated Build & Test Pipeline
* Zero-Downtime Deployments
* Free Cloud Hosting
* Self-Healing Deployments

##Folder Structure

dummy-ci-cd/
βββ .github/
β   βββ workflows/
β       βββ ci-cd-pipeline.yml    # GitHub Actions pipeline
βββ index.js                     # Node.js App
βββ package.json                 # Dependencies & Scripts
βββ __tests__/                   # Jest Test Cases
βββ README.md                    # Documentation

##How to Run Locally

# Install dependencies
npm install

# Start the app
npm start

# Run tests
npm test


##How CI/CD Works π
β’ Push code to GitHu(main branch)
βGitHub Actions automatically triggers:
	* Install dependencies
	* Run Tests
β’ If Tests Pass β, it deploys to Render automatically.

Live URL π₯

π https://dummy-ci-cd.onrender.com

