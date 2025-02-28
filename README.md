# Dummy CI/CD Pipeline
This project demonstrates a complete CI/CD Pipeline using GitHub Actions, Jest Testing, and Render for automated deployment.

##Tech Stack 🔥

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
├── .github/
│   └── workflows/
│       └── ci-cd-pipeline.yml    # GitHub Actions pipeline
├── index.js                     # Node.js App
├── package.json                 # Dependencies & Scripts
├── __tests__/                   # Jest Test Cases
└── README.md                    # Documentation

##How to Run Locally

# Install dependencies
npm install

# Start the app
npm start

# Run tests
npm test


##How CI/CD Works 🚀
• Push code to GitHu(main branch)
�GitHub Actions automatically triggers:
	* Install dependencies
	* Run Tests
• If Tests Pass ✅, it deploys to Render automatically.

Live URL 🔥

👉 https://dummy-ci-cd.onrender.com

