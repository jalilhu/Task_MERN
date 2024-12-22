pipeline {
    agent any
    environment {
        // Define the environment variables, like paths or project-specific variables
        NODE_HOME = '/usr/local/bin/node'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm  // Pull the latest code from the repository
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies for both the backend (Node.js) and frontend (React)
                    echo 'Installing backend dependencies...'
                    sh 'cd backend && npm install'  // Adjust the directory for your backend

                    echo 'Installing frontend dependencies...'
                    sh 'cd frontend && npm install'  // Adjust the directory for your frontend
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    // Build the React app
                    echo 'Building frontend React app...'
                    sh 'cd frontend && npm run build'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run your tests
                    echo 'Running backend tests...'
                    sh 'cd backend && npm test'  // Adjust based on your test setup
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy your project (adjust with your actual deployment command)
                    echo 'Deploying to production...'
                    // You can use SSH, FTP, or other deployment strategies here
                    // Example: sh './deploy.sh'
                }
            }
        }
    }
    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
